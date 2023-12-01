import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div> 

        <div className=' bg-blue-600 p-5 rounded-md flex justify-between mb-2'>
            <Link href={'/'} className='text-white text-2xl font-bold'>TASKIA</Link>
            <Link href='/addtask'  className='flex items-center text-blue-700 rounded-xl font-semibold bg-white p-2'>Add Task</Link>
        </div>
    </div>
  )
}

export default Navbar