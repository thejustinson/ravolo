// app/api/developer/create/route.ts
import { supabase } from "@/app/lib/supabase";
import { NextRequest, NextResponse } from 'next/server'
import { cors } from '@/app/lib/cors';

export async function POST(request: NextRequest) {
    await cors(request);
    try {
        const body = await request.json();
        const { public_key, username, email } = body;

        if (!public_key || !username) {
            return NextResponse.json({ error: "Public key and username are required" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("developers")
            .insert([{ public_key, username, email }])
            .select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Failed to create developer account", details: error.message }, { status: 500 });
        }

        if (!data || data.length === 0) {
            return NextResponse.json({ error: "No data returned after insertion" }, { status: 500 });
        }

        return NextResponse.json({ message: 'Developer created', data: data[0] }, { status: 201 });
    } catch (err) {
        console.error("Unexpected error:", err);
        return NextResponse.json({ error: "An unexpected error occurred", details: err instanceof Error ? err.message : String(err) }, { status: 500 });
    }
}

export async function OPTIONS(request: NextRequest) {
    await cors(request);
    return NextResponse.json({}, { status: 200 });
}