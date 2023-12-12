"use client";
import { useState } from "react";

type PoolType = {
    name: string
    items: any
}

export default function Pool({name, items} : PoolType) {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    return(
        <section className="p-4 text-center">
            <button className="border text-xl font-bold p-2 m-1 w-full" onClick={toggle}>{name}</button>
            {open && <ul>{items}</ul>}
        </section>
    );
}