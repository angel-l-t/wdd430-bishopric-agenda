import Link from "next/link";

export default function Header() {

    return (
        <div className="flex bg-gradient-to-t from-white to-myBlue1 border justify-between md:justify-around">
            <Link href={"/"}><h1 className="text-xl font-bold p-2 m-1">Bishopric Agenda</h1></Link>
            <button className="text-2xl border bg-white rounded p-2 m-1">⚙️</button>
        </div>
    );
}