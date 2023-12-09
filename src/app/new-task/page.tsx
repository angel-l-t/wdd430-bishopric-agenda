"use client";

export default function NewTask() {

    function selection(selection : any) {
        console.log(selection);
    }
    
    return(
        <form className="flex flex-col overflow-hidden fixed top-15 w-full p-6 border" action="">
            <legend className="text-2xl font-bold">New Task</legend>
            <label className="mt-6" htmlFor="test">Type</label>
            <select disabled={true} onChange={(e) => {selection(e.target.value)} } className="border mt-2" name="test" id="test">
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="Four">Four</option>
                <option value="Five">Five</option>
            </select>
        </form>
    );
}