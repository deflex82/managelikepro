"use client"

import AddNote from "@/components/AddNote";
import Notes from "@/components/Notes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
const [notes,getnotes] = useState([]);
 
useEffect(()=>{

  const storednotes = localStorage.getItem("notes");
  console.log(storednotes);
  if (storednotes) {
    
    getnotes(JSON.parse(storednotes));
  }

},[])

   return (
      <div className="min-h-screen bg-gray-900 p-4 flex flex-col justify-center items-center">

         <h2 className="text-white font-semibold text-2xl md:text-4xl text-center" >Manage your notes like a pro</h2>

        <Link href="/create">
        <AddNote/>
          </Link> 

         <h2 className="text-white font-semibold text-2xl md:text-4xl text-center">Your notes</h2>

         <div className="flex items-center gap-3 flex-wrap m-4 justify-center cursor-pointer ">
         {notes.map((note, index) => (
    <Notes key={index} text={note.text} timestamp={note.timestamp} />
  ))}
         
         </div>

      </div>
   );
}
