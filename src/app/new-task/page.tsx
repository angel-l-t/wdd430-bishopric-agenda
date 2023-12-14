import NewTaskForm from "@/app/components/NewTaskForm"
import Footer from "../components/Footer";

import { createTask } from "@/app/utils/new-task";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

import { redirect } from "next/navigation"

export default async function NewTask() {
    //@ts-ignore
    const session = await getServerSession(authOptions);
    //console.log(session);

    if (!session?.user) {
        redirect("/login");
    }
        
    return(
        <>
            <NewTaskForm createTask={createTask}/>
            <Footer />
        </>
    );
}