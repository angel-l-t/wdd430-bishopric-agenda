import Pool from "../components/Pool";

import { pullTasks } from "../utils/pull-tasks";
import { deleteTask } from "../utils/delete-task";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { redirect } from "next/navigation"


export default async function TasksPage() {
    //@ts-ignore
    const session = await getServerSession(authOptions);
    //console.log(session);

    if (!session?.user) {
        redirect("/login");
    }

    const tasks = await pullTasks();

    return (
        <>
            <Pool items={tasks} deleteTask={deleteTask}/>
        </>
    );
}