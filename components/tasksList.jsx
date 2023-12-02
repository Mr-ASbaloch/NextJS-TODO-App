import Link from "next/link";
import React from "react";
// import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new error("failed to fetch tasks");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TaskList = async () => {
  
  const { lists } = await getTasks();
  console.log(lists);
  
  

  return (
    <>
      {/* {lists.map((t) => (
        <div className="flex justify-between p-3 border  border-blue-100 md:w-3/4 mt-2 mb-2 mx-auto ">
          <div>
            <h1 className="text-xl font-bold"> {t.title}</h1>
            <h1>{t.description}</h1>
          </div>
          <div className="flex gap-2 items-center text-blue-700 font-bold">
            <Link href={"/"}>
              {" "}
              <FaRegEdit size={23} />
            </Link>
            <RiDeleteBin6Line size={23} className="text-[red]" />
          </div>
        </div>
      ))} */}
    </>
  );
};

export default TaskList;
