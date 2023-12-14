"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header() {

    return (
        <div className="flex overflow-hidden fixed top-0 w-full bg-gradient-to-t from-white to-myBlue1 border justify-between md:justify-around">
            <Link href={"/tasks-page"}><h1 className="text-xl font-bold p-2 m-1">Bishopric Agenda</h1></Link>
            <button onClick={() => signOut()} className="text-2xl border bg-white rounded p-2 m-1">↪️</button>
        </div>
    );
}