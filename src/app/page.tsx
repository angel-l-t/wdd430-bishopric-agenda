import Footer from "./components/Footer";
import Link from "next/link";

import { redirect } from "next/navigation"
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  //@ts-ignore
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/tasks-page");
  }
  
  return (
    <>
      <div className="flex flex-col p-6 border max-w-2xl mx-auto text-center">
        <Link className="text-white text-xl border bg-myBlue4 rounded py-2 px-4 mt-10 mx-auto w-40" href="/register">Register</Link>
        <Link className="text-white text-xl border bg-myBlue4 rounded py-2 px-4 mt-10 mx-auto w-40" href="/login">Login</Link>
      </div>
      <Footer />
    </>
  )
}
