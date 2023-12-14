import bcrypt from "bcrypt";
import prisma from "@/app/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const body = await request.json();
    const {name, email, password} = body.data;
    //console.log(body.data);

    if (!name || !email || !password) {
        return new NextResponse("Missing name, email, or password.", { status: 400 });
    }

    // @ts-ignore
    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (exist) {
        return new NextResponse("User already exists.", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return NextResponse.json(user);
}