import { Plus } from 'lucide-react'
import React from 'react'

const AddNote = () => {
  return (
    <div className='h-28 mx-auto  w-28 md:w-56 md:h-56 flex items-center flex-col justify-center bg-gray-100/15 mt-8 group cursor-pointer rounded-sm hover:scale-110 transition m-4 over '>

      
        <Plus className='text-slate-100 group-hover:scale-125' size={50} />
        <p className='text-gray-400 font-bold group-hover:block block md:hidden transition-all' >Add note</p>

        
        </div>
  )
}

export default AddNote