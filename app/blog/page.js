"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dapatkan data dari API/post saat komponen dimuat
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/blogs`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 mt-10">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
            Kumpulan Blog JSS
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 mt-5">
          {posts.map((post) => (
            <article key={post._id} className="p-2">
              <Image src={post.img} alt="" width={700} height={500} className="object-cover mb-2" />
              <span className="text-green-400 text-l font-medium inline-flex items-center py-0.5 ">
                {post.category}
              </span>
              <h2 className="text-3xl font-bold tracking-wide text-gray-600 dark:text-gray-600">
                <Link href={`/blog/${post._id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400">Penulis : {post.username}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
