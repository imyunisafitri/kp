import connect from "@/utils/db";
import Blog from "@/models/Blog";
import Post from "@/models/Post"
import { NextResponse } from "next/server";


export const GET = async (request) => {
 

  try {
    await connect();

    const blog = await Blog.find({});

    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (req) => {
  try {
    // Dapatkan data yang dikirimkan dalam permintaan
    const { id } = await req.json();

    await connect()

      // Cari blog yang sesuai dengan ID
      const blog = await Post.findById(id);

      if (!blog) {
        return new NextResponse("Blog not found", { status: 404 });
      }

      // Buat instance baru dari model Blog
      const newBlog = new Blog({
        title: blog.title,
        img: blog.img,
        desc: blog.desc,
        username: blog.username,
        content: blog.content,
        category: blog.category
      });

      // Simpan data blog ke database
      await newBlog.save();

    return new NextResponse("Blog has been created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};