import { FaCube } from "react-icons/fa";


const Card = ({data}) => {
    return ( 
        <div className="Card group border-2 border-gray-600 rounded-lg p-4 text-slate-100 hover:text-black hover:bg-indigo-400 hover:border-indigo-400 hover:md:-translate-y-6 hover:ease-in duration-100">
            <div className="card-header flex flex-row justify-between items-center mb-5">
               <FaCube className="text-3xl"></FaCube>
                <p>{data.date}</p>
            </div>
            <div className="card-content flex flex-col items-start">
                <p className="card-title text-2xl w-2/3 text-left font-bold">{data.title}</p>
                <hr class="h-px w-8 my-5 border-0 bg-slate-100 group-hover:bg-black"></hr>
                <ul className="list-outside list-disc text-sm mb-5 text-left pl-4">
                    {data.list.map(x => <li>{x}</li>)}
                </ul>
                <a href="" className="underline underline-offset-4 font-bold">Read more</a>
            </div>
        </div>
     );
}
 
export default Card;