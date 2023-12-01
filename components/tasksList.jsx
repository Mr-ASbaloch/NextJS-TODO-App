import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = () => {
  return (
    <>

      <div className="flex justify-between p-3 border  border-blue-100 md:w-3/4 mt-2 mb-2 mx-auto ">
        <div>
          <h1 className="text-xl font-bold"> task title</h1>
          <h1>task description</h1>
        </div>
        <div className="flex gap-2 items-center text-blue-700 font-bold">
          <Link href={"/"}>
            {" "}
            <FaRegEdit  size={23} />
          </Link>
          <RiDeleteBin6Line size={23}  className="text-[red]"   />
        </div>
      </div>
    </>
  );
};

export default TaskList;
