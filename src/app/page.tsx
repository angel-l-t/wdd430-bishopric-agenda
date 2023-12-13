import ItemsFilter from "./components/ItemsFilter"

import { pullTasks } from "./utils/pull-tasks"

export default async function Home() {
  const tasks = await pullTasks();
  //console.log(tasks);
  
  return (
    <>
      <ItemsFilter tasks={tasks} />  
    </>
  )
}
