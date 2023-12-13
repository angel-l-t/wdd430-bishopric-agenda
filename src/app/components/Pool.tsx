"use client";
import { useState } from "react";
import Link from "next/link";

type PoolType = {
    name: string
    items: any
    opened: boolean
    deleteTask: any
}

export default function Pool({name, items, opened, deleteTask} : PoolType) {
    const [open, setOPen] = useState(opened);
    const [tasks, setTasks] = useState(items);

    function delTask(id: string) {
        deleteTask(id);
        setTasks(
            tasks.filter((t : any) => t.id !== id)
        );
    }

    const toggle = () => {
        setOPen(!open);
    };
    
    return(
        <>
        <section className="p-1 text-center">
            <button className="bg-gradient-to-t from-white to-myBlue1 border text-xl font-bold p-2 m-1 w-full" onClick={toggle}>{name}</button>
            {open && 
                <ul>{tasks.map((item : any) => {
                let date = item.dateTime;

                if (date !== "No") {
                        date = new Date(item.dateTime).toLocaleString('en-US', {
                        dateStyle: 'full',
                        timeStyle: 'short',
                    });    
                }                            
                
                return(<li className="m-6 text-left text-sm border-myBlue4 border-b-2 mt-6 grid grid-cols-2" key={item.id}>
                    <h1 className="font-bold border-b-2">Type</h1><h1 className="font-bold border-b-2">{item.type}</h1>
                    <h2 className="border-b-2">Assigned to</h2><h2 className="border-b-2">{item.assigned}</h2>
                    <p className="border-b-2">Title</p><p className="border-b-2">{item.title}</p>
                    <p className="border-b-2">Description</p><p className="border-b-2">{item.description}</p>
                    <span className="border-b-2">Due Date</span><span className="border-b-2">{date}</span>
                    <button onClick={() => delTask(item.id)} className="text-white text-lg w-fit border bg-red-400 rounded py-2 px-4 m-1">Delete</button>
                </li>)
                })}</ul>
            }                                 
        </section>        
        </>
    );
}