type PoolType = {
    name: string
    items: any
}

export default function Pool({name, items} : PoolType) {


    return(
        <section className="p-5 text-center">
            <h1 className="text-xl font-bold p-2 m-1">{name}</h1>
            <ul>
                {items}
            </ul>
        </section>
    );
}