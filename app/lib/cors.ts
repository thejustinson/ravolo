// app/lib/cors.ts
import { NextRequest, NextResponse } from 'next/server';

export async function cors(request: NextRequest) {
    // Allow all origins
    const origin = request.headers.get('origin') ?? '*';
    const method = request.method;

    // Set CORS headers
    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });

    // Handle preflight requests
    if (method === 'OPTIONS') {
        headers.set('Access-Control-Max-Age', '86400');
        return new NextResponse(null, { status: 204, headers });
    }

    // For actual requests, return the headers
    return { headers };
}