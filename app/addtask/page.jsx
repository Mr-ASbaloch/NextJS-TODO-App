"use client";
import React, { useState } from "react";
// import React from "react";
import {  toast } from "react-toastify";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddTask = () => {
  
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.warning('fill all fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    console.log(title, description);

    try {
      const res = await fetch("http://localhost:3000/api/tasks ", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        toast.success('task added sucessfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        throw new Error(
          toast.error(Error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <>
    <ToastContainer/>
      <form
        action="post"
        onSubmit={handleSubmit}
        className="md:flex  flex-col p-3 md:w-1/2 mx-auto"
      >
        <label htmlFor="title" className="capitalize text-xl">
          {" "}
          title :
        </label>
        <input
          type="text"
          placeholder="Add title "
          className="border  p-2 mb-3 rounded-md"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="title" className="capitalize text-xl">
          {" "}
          description :
        </label>
        <input
          type=" text"
          placeholder=" Add description"
          className="border  p-2 mb-3 rounded-md"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className=" w-full bg-blue-500 text-white p-2 text-center rounded-md mb-3">
          Add task
        </button>
      </form>
    </>
  );
};

export default AddTask;
