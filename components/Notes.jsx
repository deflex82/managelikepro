import { getnotes } from '@/lib/notesutlis'
import Link from 'next/link';
import React from 'react'

const  Notes = ({text,timestamps}) => {
  return (
    <div className='w-28 h-28 md:h-56 md:w-56 bg-gray-700 overflow-hidden group hover:scale-105 rounded-sm hover:border hover:border-slate-100 transition relative '  >
        <button onClick={()=>{
            const notes= getnotes();
            const updatedNotes = notes.filter(note => note.text !== text);

            localStorage.setItem("notes",JSON.stringify(updatedNotes));
            window.location.reload();
               
            

        }} className='hidden group-hover:block text-red-600 font-bold text-2xl absolute right-2 top-0 '>X</button>
        <p className='text-slate-300 p-2 font-mono'>{text}</p>

    </div>
    
  )
}

export default  Notes