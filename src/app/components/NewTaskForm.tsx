"use client";
import { useState } from "react";

export default function NewTaskForm({ createTask } : any) {

    const [open1, setOPen1] = useState(false);
    const [open2, setOPen2] = useState(false);
    const [open3, setOPen3] = useState(false);

    function toggle(e : any, func: any, inputValue : string) {
        if(e.target.value === inputValue) {
            func(true);
        } else {
            func(false);
        }       
    }
    
    return(
        <form className="flex flex-col p-6 border" action={createTask}>
            <legend className="text-2xl font-bold">New Task</legend>

            <label className="mt-8 font-bold" htmlFor="type">Type</label>
            <select onChange={(e) => {toggle(e, setOPen1, "Other")}} className="border mt-2" name="type" id="type">
                <option value="Interview">Interview</option>
                <option value="Set Apart">Set Apart</option>
                <option value="Other">Other</option>                
            </select>

            {open1 && 
            <>
                <label className="mt-2" htmlFor="type2">Write a Type</label>
                <input maxLength={50} required className="border pl-1" type="text" name="type2" id="type2" />
            </>
            }            

            <label className="mt-8 font-bold" htmlFor="assignedTo">Assigned to</label>
            <select onChange={(e) => {toggle(e, setOPen2, "Other")}} className="border mt-2" name="assignedTo" id="assignedTo">
                <option value="Bishop">Bishop</option>
                <option value="1st Counselor">1st Counselor</option>
                <option value="2nd Counselor">2nd Counselor</option>                
                <option value="Secretary">Secretary</option>                
                <option value="Other">Other</option>                
            </select>

            {open2 && 
            <>
                <label className="mt-2" htmlFor="assignedTo2">Assigned to...</label>
                <input maxLength={50} required className="border pl-1" type="text" name="assignedTo2" id="assignedTo2" />
            </>
            }

            <label className="mt-8 font-bold" htmlFor="title">Title</label>
            <input maxLength={50} required className="border mt-2 pl-1" type="text" name="title" id="title" />

            <label className="mt-8 font-bold" htmlFor="description">Description</label>
            <textarea maxLength={600} className="border p-2 mt-2" name="description" id="description" rows={5}/>

            <label htmlFor="dateTime" className="mt-8 font-bold">Due Date</label>
            <select defaultValue={"No"} onChange={(e) => {toggle(e, setOPen3, "Yes")}} className="border mt-2" id="dateTime" name="dateTime">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select>

            {open3 && 
                <input required className="border mt-8" type="datetime-local" name="dateTime2" id="dateTime2" />
            }
            

            <button className="text text-xl border bg-white rounded py-2 px-4 mt-10 mr-auto w-40" type="submit">Create Task</button>
        </form>
    );
}