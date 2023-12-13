import prisma from "../db/prisma"

export async function pullTasks() {
    "use server";

    const tasks = await prisma.tasks.findMany();

    return tasks;
}
