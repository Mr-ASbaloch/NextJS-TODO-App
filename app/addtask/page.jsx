import React from "react";

const AddTask = () => {
  return (
    <>
      <form action="" className="md:flex  flex-col p-3 md:w-1/2 mx-auto">
        <label htmlFor="title" className="capitalize text-xl">
          {" "}
          title :
        </label>
        <input
          type="text"
          placeholder="Add title "
          className="border  p-2 mb-3 rounded-md"
        />
        <label htmlFor="title" className="capitalize text-xl">
          {" "}
          description :
        </label>
        <input
          type=" text"
          placeholder=" Add description"
          className="border  p-2 mb-3 rounded-md"
        />
        <button className=" w-full bg-blue-500 text-white p-2 text-center rounded-md mb-3">
          Add task
        </button>
      </form>
    </>
  );
};

export default AddTask;
