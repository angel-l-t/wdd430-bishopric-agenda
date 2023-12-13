"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pool({items, deleteTask} : any) {
    const [open1, setOPen1] = useState(false);
    const [open2, setOPen2] = useState(true); 

    const [tasks, setTasks] = useState(items);

        function filterByRole(role:string) {
        if (role === "All") {
            setTasks(items);
        } else if (role === "Bishop") {
            setTasks(items.filter((task:any) => task.assigned === "Bishop"));
        } else if (role === "1st Counselor") {
            setTasks(items.filter((task:any) => task.assigned === "1st Counselor"));
        } else if (role === "2nd Counselor") {
            setTasks(items.filter((task:any) => task.assigned === "2nd Counselor"));
        } else if (role === "Secretary") {
            setTasks(items.filter((task:any) => task.assigned === "Secretary"));
        } else {
            setTasks(items);
        }
    }

    // Due dates from string to date object 
    const dateToObject = tasks.map((obj : any) => {
        return {...obj, dateTime: new Date(obj.dateTime)};
    });

    // Sorting tasks by date
    const sortedTasks = dateToObject.sort(
        (objA:any, objB:any) => Number(objA.dateTime) - Number(objB.dateTime),
    );
    
    const pastTasks = sortedTasks.filter(
        (task:any) => task.dateTime < new Date,
    )

    const currentTasks1 = sortedTasks.filter(
        (task:any) => task.dateTime >= new Date,
    )

    const noDateTasks = tasks.filter(
        (task:any) => task.dateTime === "No",
    )

    const currentTasks2 = [...currentTasks1, ...noDateTasks];

    // Delete task function
    function delTask(id: string) {
        deleteTask(id);
        setTasks(
            tasks.filter((t : any) => t.id !== id)
        );
    }       

    // Toggle open and closed
    function toggle(func: any, open : boolean) {        
        if (open === true) {
            func(false);
        } else {
            func(true);
        }        
    }
    
    return(
        <>
        <div className="max-w-2xl mx-auto">
        <section className="p-1 text-center">
            <button className="bg-gradient-to-t from-white to-myBlue1 border text-xl font-bold p-2 m-1 w-full" onClick={() => (toggle(setOPen1, open1))}>Past</button>
            {open1 && 
                <ul>{pastTasks.map((item : any) => {
                let date = item.dateTime;
                
                date = new Date(item.dateTime).toLocaleString('en-US', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                });   

                if (date === "Invalid Date") {
                    date = "No";
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

        <section className="p-1 text-center">
            <button className="bg-gradient-to-t from-white to-myBlue1 border text-xl font-bold p-2 m-1 w-full" onClick={() => (toggle(setOPen2, open2))}>In Progress</button>
            {open2 && 
                <ul>{currentTasks2.map((item : any) => {
                let date = item.dateTime;

                date = new Date(item.dateTime).toLocaleString('en-US', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                });   

                if (date === "Invalid Date") {
                    date = "No";
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
        </div>

        <div className="flex overflow-hidden fixed bottom-0 w-screen bg-gradient-to-b border from-white to-myBlue1 justify-end md:justify-center">
            <Link href={"/new-task"}><button className="text text-xl border bg-white rounded py-2 px-4 m-1">Task &#43;</button></Link>
            <select onChange={(e) => filterByRole(e.target.value)} className="text-xl border rounded py-2 px-4 m-1" name="page-selection" id="page-selection">
                <option value="All">All</option>
                <option value="Bishop">Bishop</option>
                <option value="1st Counselor">1st Counselor</option>
                <option value="2nd Counselor">2nd Counselor</option>
                <option value="Secretary">Secretary</option>
            </select>
        </div>   
        </>
    );
}