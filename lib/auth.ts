import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: 'text', placeholder: 'exmaple123' },
                password: { label: "Password", type: 'password', placeholder: '***********' }
            },
            async authorize(credentials) {
                if (!(credentials?.username && credentials?.password)) {
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: { username: credentials.username }
                });

                if (!existingUser) {
                    return null;
                }

                const passwordMatch = await compare(credentials.password, existingUser.password);
                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: `${existingUser.id}`,
                    username: existingUser.username,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user}) {
            if (user) {
                return {
                    ...token,
                    username: user.username,
                }
            }
            return token
        },
        async session({session, user, token}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
            }
        }
    }
}