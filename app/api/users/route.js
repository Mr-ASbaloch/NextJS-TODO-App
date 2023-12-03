import connectMongoDb from "@/libs/mongodb"
import { task } from "@/models/task"
import { profile } from "@/models/users"
import { NextResponse } from "next/server"

export const GET = async (request , route)=>{
    try {
       await connectMongoDb()
       const data =  await profile.find ().exec()
       return NextResponse.json ({message: "success", users:data})
    } catch (error) {
        console.log(error);
    }

}