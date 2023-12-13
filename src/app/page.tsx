import Pool from "./components/Pool";

import { pullTasks } from "./utils/pull-tasks";
import { deleteTask } from "./utils/delete-task";

export default async function Home() {
  const tasks = await pullTasks();
  //console.log(tasks);
  
  return (
    <>
      <Pool items={tasks} deleteTask={deleteTask}/>
    </>
  )
}
