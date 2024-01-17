import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Blog from "@/models/Blog";

export const GET = async (req,{ params}) => {
  await connect();
  const { id } = params;
  try {
    

    const blog = await Blog.findById(id);

    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Blog.findByIdAndDelete(id);

    return new NextResponse("Blog has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
