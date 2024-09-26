// app/api/collections/create/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Connection } from '@/app/lib/connection';
import { createCollection, CreateCollectionArgs } from "@metaplex-foundation/mpl-core";
import { signerIdentity, Umi } from "@metaplex-foundation/umi";
import { supabase } from "@/app/lib/supabase";
import { cors } from '@/app/lib/cors';

export async function POST(request: NextRequest) {
    // Run the cors middleware
    await cors(request);

    try {
        const body = await request.json();
        const {
            game_id,
            name,
            description,
            symbol,
            tradeable,
            thumbnail_url,
            metadata_uri,
            royalty_percentage,
            secret_key // This should be the user's private key
        } = body;

        // Validate required fields
        if (!game_id || !name || !symbol || !metadata_uri || !secret_key) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Initialize Umi connection
        const connection = Connection.getInstance();
        const umi: Umi = connection.connect(process.env.SOLANA_RPC_ENDPOINT || '');

        // Create signer from user's secret key
        const signer = connection.useExistingKeypair(umi, secret_key);
        umi.use(signerIdentity(signer));

        // Create collection on-chain
        const collectionSigner = connection.createNewKeyPair(umi);
        const createCollectionArgs: CreateCollectionArgs = {
            collection: collectionSigner,
            name,
            uri: metadata_uri,
            // symbol,
            // sellerFeeBasisPoints: royalty_percentage * 100, 
            plugins: [
                {
                    type: "PermanentFreezeDelegate",
                    frozen: !tradeable,
                    authority: { type: "None" },
                },
            ],
        };

        const onChainResult = await createCollection(umi, createCollectionArgs).sendAndConfirm(umi);

        // Store collection in Supabase
        const { data, error } = await supabase
            .from("collections")
            .insert({
                game_id,
                name,
                description,
                address: collectionSigner.publicKey,
                symbol,
                tradeable,
                thumbnail_url,
                metadata_uri,
                royalty_percentage,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Failed to create collection", details: error.message }, { status: 500 });
        }

        if (!data || data.length === 0) {
            return NextResponse.json({ error: "No data returned after insertion" }, { status: 500 });
        }

        return NextResponse.json({ 
            message: 'Collection created successfully', 
            onChainResult,
            databaseResult: data[0]
        }, { status: 201 });

    } catch (err) {
        console.error("Unexpected error:", err);
        return NextResponse.json({ error: "An unexpected error occurred", details: err instanceof Error ? err.message : String(err) }, { status: 500 });
    }
}

export async function OPTIONS(request: NextRequest) {
    // Run the cors middleware
    await cors(request);
    return NextResponse.json({}, { status: 200 });
}