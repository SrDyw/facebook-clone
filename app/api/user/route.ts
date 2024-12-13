import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { PrismaClient } from "@prisma/client";

export async function GET() {
    return NextResponse.json({ success: true })
}

export async function POST(req: Request) {
    const prisma = new PrismaClient()
    try {
        const body = await req.json();
        const { email, username, password } = body;
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "Ya existe un usuario con este email" }, { status: 409 });
        }

        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });

        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "Ya existe un usuario con este nombrea de usuario" }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        return NextResponse.json({ user: newUser, message: 'Usuario creado exitosamente' }, { status: 201 });
    } catch (err) {
        console.log(err)
    }
}