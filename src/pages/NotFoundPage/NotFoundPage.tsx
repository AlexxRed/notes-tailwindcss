import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className=' flex-row h-screen bg-no-repeat m-0 pt-5'>
            <p className='flex ml-auto mr-auto mt-auto mb-5 justify-center items-center text-6xl text-gray-600 w-full'>Sorry, page not found :( <Link className=" text-red-700" to="/">Click here to go to the main page</Link></p>
        </div>
    )
};