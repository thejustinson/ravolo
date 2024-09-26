// app/api/games/create/route.ts
import { supabase } from "@/app/lib/supabase";
import { NextRequest, NextResponse } from 'next/server';
import { cors } from '@/app/lib/cors';

export async function POST(request: NextRequest) {
    // Run the cors middleware
    await cors(request);

    try {
        const body = await request.json();
        const {
            developer_id,
            name,
            description,
            genre,
            thumbnail_url,
            status,
            tags,
            asset_integration_rules,
            play_link
        } = body;

        // Validate required fields
        if (!developer_id || !name) {
            return NextResponse.json({ error: "Developer ID and game name are required" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("games")
            .insert([{
                developer_id,
                name,
                description,
                genre,
                thumbnail_url,
                status,
                tags,
                asset_integration_rules,
                play_link,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }])
            .select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Failed to create game", details: error.message }, { status: 500 });
        }

        if (!data || data.length === 0) {
            return NextResponse.json({ error: "No data returned after insertion" }, { status: 500 });
        }

        return NextResponse.json({ message: 'Game created successfully', data: data[0] }, { status: 201 });
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