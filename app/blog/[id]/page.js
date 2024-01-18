"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "next-share";

const BlogPost = ({ params }) => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`https://kp-steel.vercel.app/api/blogs/${params.id}`, {
        cache: "no-store",
      });
      const blog = await res.json();
      setBlog(blog);
    }
    async function fetchComments() {
      try {
        const res = await fetch("/api/comments");
        if (res.ok) {
          const comments = await res.json();
          // Filter komentar berdasarkan blogId yang sesuai
          const filteredComments = comments.filter((comment) => comment.blogId === params.id);
          setComments(filteredComments);
        } else {
          console.error("Failed to fetch comments:", res.status, res.statusText);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
    if (params.id) {
      fetchBlog();
      fetchComments();
    }
  }, [params.id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-2 mb-2 mt-12">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-extrabold text-gray-700">
            {blog.title}
          </h2>
          <p className="mt-2 uppercase text-xl text-green-600">{blog.category}</p>
          <p className="mt-2">Penulis : {blog.username}</p>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image src={blog.img} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <article className="p-3 mx-auto max-w-screen-lg lg:p-0">
        <div className="prose text-lg mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
          {blog.content}
        </div>
        {/* Share buttons */}
        <div className="flex justify-center mt-4">
          {/* Facebook Share Button */}
          <FacebookShareButton
            url={`https://kp-steel.vercel.app/blog/${params.id}`}
            quote={"Baca artikel selengkapnya link dibawah ini."}
            hashtag={"#blogjss"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://kp-steel.vercel.app/blog/${params.id}"}
            title={"Baca artikel selengkapnya link dibawah ini."}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div className="mb-7 mt-7 flex justify-center">
          <Link
            href="/blog"
            className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
          >
            ← View all blog
          </Link>
        </div>
      </article>
      <CommentForm blogId={params.id} />
      <CommentList comments={comments} />
      <Footer />
    </>
  );
};

export default BlogPost;
