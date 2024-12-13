import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { z } from "zod";

const userSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirm is required!'),
});

export async function GET() {
    return NextResponse.json({ success: true })
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);
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
        });
        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: 'Usuario creado exitosamente' }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Algo anda mal, averigua ahi" }, { status: 500 });
    }
}