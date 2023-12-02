import TaskList from '@/components/tasksList'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div >

      <ToastContainer/>
      <h1 className='text-center md:text-2xl font-serif'>  Tasks List  </h1>
      <TaskList/>
      </div>
  )
}

export default page