import prisma from "../db/prisma"
import { redirect } from "next/navigation"

export async function deleteTask(taskId : string) {
    "use server";

    const deleteUser = await prisma.tasks.delete({
        where: {            
            id: taskId,
        },
    })    
}
