import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';

const corsHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

/**
 *  @method  GET
 *  @route   ~/api/auth/me
 *  @desc    Get Current User Profile
 *  @access  private (only logged-in users)
 */
export async function GET(request: NextRequest) {
    try {
        const userFromToken = verifyToken(request);

        if (!userFromToken) {
            return NextResponse.json(
                { message: 'you are not logged in' },
                { status: 401, headers: corsHeaders }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: userFromToken.id },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                admin: true,
            }
        });

        if (!user) {
            return NextResponse.json(
                { message: 'user not found' },
                { status: 404, headers: corsHeaders }
            );
        }

        return NextResponse.json(user, { status: 200, headers: corsHeaders });

    } catch (error) {
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500, headers: corsHeaders }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, { status: 200, headers: corsHeaders });
}
