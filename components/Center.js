import { useSession } from 'next-auth/react';
import {ChevronDownIcon} from "@heroicons/react/outline";
import { useEffect,useState } from 'react';
import {shuffle} from "lodash";

const colors = [
    "from-indigo-500",
    "from-slate-500",
    "from-orange-400",
    "from-cyan-500",
    "from-emerald-500",
    "from-rose-500",
];

function Center(){
    const{data:session} = useSession();
    const [color,setColor] = useState(null);
    useEffect(() =>{
        setColor(shuffle(colors).pop());
    },[])

    return <div className="flex-grow">
        <header className='absolute top-5 right-8'>
            <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
                <img className='rounded-full w-10 h-10' src={session?.user.image} alt=""></img>
                <h2>{session?.user.name}</h2>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </div>
        </header>
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
            <img src="" alt=""></img>
            <h1>Hello</h1>
        </section>
    </div>
}

export default Center