import Pool from "./Pool";
import Link from "next/link";

import { deleteTask } from "../utils/delete-task";

export default function ItemsFilter( tasks : any ) {
    let arrayOfTasks = tasks["tasks"];
    
    return(
        <>            
            <Pool name={"Past"} items={arrayOfTasks} opened={false} deleteTask={deleteTask} />
            <Pool name={"In progress"} items={arrayOfTasks} opened={true} deleteTask={deleteTask}/>
            
            <div className="flex overflow-hidden fixed bottom-0 w-full bg-gradient-to-b border from-white to-myBlue1 justify-end md:justify-center">
            <Link href={"/new-task"}><button className="text text-xl border bg-white rounded py-2 px-4 m-1">Task &#43;</button></Link>
            <select className="text-xl border rounded py-2 px-4 m-1" name="page-selection" id="page-selection">
                <option value="All">All</option>
                <option value="Bishop">Bishop</option>
                <option value="1st Counselor">1st Counselor</option>
                <option value="2nd Counselor">2nd Counselor</option>
                <option value="Secretary">Secretary</option>
                <option value="Executive Secretary">Executive Secretary</option>
            </select>
            </div>
        </>
    );
}