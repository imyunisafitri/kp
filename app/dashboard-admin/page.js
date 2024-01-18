"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    // Dapatkan data dari API/post saat komponen dimuat
    fetchPosts();
    fetchBlog();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const approvePost = async (id) => {
    try {
      const response = await fetch("http://localhost:3001/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error("Failed to approve post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/blogs");
      const blogg = await response.json();
      setBlog(blogg);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10">
      {/* <Link
        className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
        href="/dashboard-admin/login"
      >
        Logout
      </Link> */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 mt-5">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
            Dashboard Admin
          </h2>
          <p>Kumpulan Blog User</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 mt-5">
          {posts.map((post) => (
            <article
              key={post._id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-green-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-primary-100 text-white text-l font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-700">
                  {post.category}
                </span>
                <span
                  className="text-2xl text-red-600 cursor-pointer"
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
              <Image src={post.img} alt="" width={100} height={100} className="mt-2 mb-2" />
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <a href="#">Judul Blog : {post.title}</a>
              </h2>
              <p className="mb-2">Penulis: {post.username}</p>
              <p className="mb-2 font-medium">Desc Singkat: {post.desc}</p>
              <p className="mb-2 font-semibold truncate">Isi : {post.content}</p>
              <button
                onClick={() => approvePost(post._id)}
                className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-2 mt-2"
              >
                Approve
              </button>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 mt-10">
          <h2 className="mb-2 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
            Blog After Approve
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 mt-5">
          {blog.map((b) => (
            <article
              key={b._id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-green-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-primary-100 text-white text-l font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-700">
                  {b.category}
                </span>
                <span
                  className="text-2xl text-red-600 cursor-pointer"
                  onClick={() => handleDeleteBlog(b._id)}
                >
                  X
                </span>
              </div>
              <Image src={b.img} alt="" width={100} height={100} className="mt-2 mb-2" />
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <a href="#">Judul Blog: {b.title}</a>
              </h2>
              <p className="mb-2">Penulis: {b.username}</p>
              <p className="mb-2 font-medium">Desc Singkat: {b.desc}</p>
              <p className="mb-2 font-semibold truncate">Isi : {b.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
