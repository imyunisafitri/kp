import connect from "@/utils/db";
import Comment from "@/models/Comment";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connect();
    const comments = await Comment.find({});
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const POST = async (req) => {
  try {
    // Dapatkan data yang dikirimkan dalam permintaan
    const { blogId, comment } = await req.json();
    await connect()
    
    const newComment = new Comment({
     blogId, comment
    });

    await newComment.save();

    return new NextResponse("Comment has been created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};