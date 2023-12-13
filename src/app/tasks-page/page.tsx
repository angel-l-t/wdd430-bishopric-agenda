import Pool from "../components/Pool";

import { pullTasks } from "../utils/pull-tasks";
import { deleteTask } from "../utils/delete-task";


export default async function TasksPage() {
    const tasks = await pullTasks();

    return (
        <>
            <Pool items={tasks} deleteTask={deleteTask}/>
        </>
    );
}