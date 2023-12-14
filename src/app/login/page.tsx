"use client";
import Footer from "../components/Footer";
import Link from "next/link";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const { data: session } = useSession();

    if (session?.user) {
        redirect("/tasks-page");
    }

    async function loginUser(e:any) {
        
        signIn("credentials", {
            ...data,
            redirect: false,
        });
    }

    return(
        <>
            <form className="flex flex-col p-6 border max-w-2xl mx-auto" action={loginUser}>
                <label className="mt-4 font-bold" htmlFor="email">Email</label>
                <input className="border mt-2 pl-1" required type="email" id="email" name="email" autoComplete="email" value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}} />

                <label className="mt-4 font-bold" htmlFor="password">Password</label>
                <input className="border mt-2 pl-1" required type="password" id="password" name="password" autoComplete="current-password" value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}} />
                
                <button className="text-white text-xl border bg-myBlue4 rounded py-2 px-4 mt-10 ml-auto w-40" type="submit" >Login</button>
                <Link href="/register" className="text-myBlue5 font-bold mt-8 underline decoration-solid">Dont have an account? Register...</Link>
            </form>
            <Footer />
        </>
    );
}