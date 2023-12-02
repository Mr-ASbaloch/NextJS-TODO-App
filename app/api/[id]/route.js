import connectMongoDb from "@/libs/mongodb";
import task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDb();
  await task.findByIdAndUpdate(id, { title, description });
  return NextResponse.json("task updated");
}
