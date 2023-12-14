"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RegisterPage() {
    const [error, setError] = useState(false);

    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { data: session } = useSession();

    if (session?.user) {
        redirect("/tasks-page");
    }

    async function registerUser(e:any) {
        //e.preventDefault();
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({data})
        });

        if (response.ok === false) {
            setError(!error);
            return;
        }

        //const userInfo = await response.json();
        //console.log(userInfo);
        router.push("/login");
    }

    return(
        <>
            <form className="flex flex-col p-6 border max-w-2xl mx-auto" action={registerUser}>
                {error && <p>User already exists</p>}
                <label className="mt-4 font-bold" htmlFor="name">Name</label>
                <input className="border mt-2 pl-1" required type="text" id="name" name="name" value={data.name} onChange={(e) => {setData({...data, name: e.target.value})}} />

                <label className="mt-4 font-bold" htmlFor="email">Email</label>
                <input className="border mt-2 pl-1" required type="email" id="email" name="email" autoComplete="email" value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}} />

                <label className="mt-4 font-bold" htmlFor="password">Password</label>
                <input className="border mt-2 pl-1" required type="password" id="password" name="password" autoComplete="current-password" value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}} />
                
                <button className="text-white text-xl border bg-myBlue4 rounded py-2 px-4 mt-10 ml-auto w-40" type="submit" >Register</button>
                <Link href="/login" className="text-myBlue5 font-bold mt-8 underline decoration-solid">Already have an account? Login...</Link>
            </form>
        </>
    );
}