import connectMongoDb from "@/libs/mongodb";
import task from "@/models/task";
import { NextResponse } from "next/server";

//post api
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDb();
  await task.create({ title, description });
  return NextResponse.json({ message: "task created" });
}

//get api

export async function GET() {
  await connectMongoDb();
  const result = await task.find();
  return NextResponse.json(result);
}

// delete api

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await task.findByIdAndDelete(id);
  return NextResponse.json("deleted");
}
