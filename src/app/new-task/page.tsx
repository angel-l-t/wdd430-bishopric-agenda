import NewTaskForm from "@/app/components/NewTaskForm"
import { createTask } from "@/app/utils/new-task";

export default function NewTask() {
        
    return(
        <NewTaskForm createTask={createTask}/>
    );
}