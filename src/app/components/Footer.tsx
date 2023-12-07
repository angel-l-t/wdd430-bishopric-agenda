export default function Footer() {
     return (
        <div className="flex overflow-hidden fixed bottom-0 w-full bg-gradient-to-b border from-white to-myBlue1 justify-end md:justify-around">
            <button className="text text-xl border bg-white rounded py-2 px-4 m-1">Task &#43;</button>
            <select className="text-xl border rounded py-2 px-4 m-1" name="page-selectio" id="page-selectio">
                <option value="All">All</option>
                <option value="Bishop">Bishop</option>
                <option value="1st Counselor">1st Counselor</option>
                <option value="2nd Counselor">2nd Counselor</option>
                <option value="Secretary">Secretary</option>
                <option value="Executive Secretary">Executive Secretary</option>
            </select>
        </div>
     );
}