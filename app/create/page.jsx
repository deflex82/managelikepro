"use client"
import { buttonVariants } from '@/components/ui/button';
import { getCurrentDateTime } from '@/lib/getcurrentdate';
import { savenotes } from '@/lib/notesutlis';
import { cn } from '@/lib/utils';
import { ArrowLeft} from 'lucide-react'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

const Create = () => {
    const [text,settext] = useState("");
    const router = useRouter();
    const currentdate = getCurrentDateTime();
    const textref = useRef(null)
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-900 p-4 h-full relative'>
       <Link href="/">
       <button className='absolute top-10 left-10 text-2xl text-slate-100'><ArrowLeft/></button>
        </Link> 

        <div className="bg-gray-700 w-[40%] h-[80%]  p-4 relative">

           
            <p className='text-gray-500 text-xl text-right font-mono font-semibold absolute top-0 right-4 ' >{currentdate}</p>
            <textarea ref={textref} onChange={e=>{
                
              settext(e.target.value)
                
            }} className='bg-transparent w-full border-none outline-none text-2xl font-mono text-slate-100 h-full mt-4' placeholder="Please write your notes..."/>


            <div className={`w-full  items-center justify-end mt-4  ${text!='' ? "flex" :"hidden"}  gap-4`}>
                <button onClick={()=>{
                    savenotes(text);
                    router.push("/")
                }} className="bg-green-500 font-bold rounded-sm px-4 py-2 text-slate-100 hover:bg-green-500/75 transition hover:text-slate-300 ">save</button>
                <button onClick={()=>{
                    textref.current.value="";
                    settext("");
                }} className="bg-red-600 font-bold rounded-sm px-4 py-2 text-slate-100 hover:bg-red-600/75 transition hover:text-slate-300 ">clear</button>
            </div>
        </div>

    </div>
  )
}

export default Create