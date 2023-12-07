import Pool from "./components/Pool"

let items = (
  <>
  <li>Item de Prueba 1</li>
  <li>Item de Prueba 2</li>
  <li>Item de Prueba 3</li>
  <li>Item de Prueba 4</li>
  </>
);

export default function Home() {
  return (
    <>
      <Pool name={"Not Completed"} items={items} />
      <Pool name={"Completed"} items={items} />
      <Pool name={"In progress"} items={items} />
    </>
  )
}
