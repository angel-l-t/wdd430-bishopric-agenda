import prisma from "@/app/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "yourusername"},
                password: {label: "Password", type: "password"},
                email: {label: "Email", type: "email"}
            },
            // @ts-ignore
            async authorize(credentials) {
                // Check to see if email and password is valid
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                // Check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    return null;
                }

                // Check if passwords match
                // @ts-ignore
                const passwordsMatch = await bcrypt.compare(credentials.password, user.password);

                if (!passwordsMatch) {
                    return null;
                }

                // Return user object if everything is valid
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}