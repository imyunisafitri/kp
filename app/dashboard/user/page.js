"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const CLOUD_NAME = "dbxssb515";
  const UPLOAD_PRESET = "my_blog_project_jss";

  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("Pendidikan");
  const session = useSession();
  const [photoError, setPhotoError] = useState("");

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[4].value;
    const img = await uploadImage();

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
  
      if (!allowedTypes.includes(selectedFile.type)) {
        setPhotoError("File harus berupa gambar (png, jpeg, jpg, gif).");
        setPhoto(""); // Hapus foto jika jenis file tidak diizinkan
      } else {
        setPhotoError("");
        setPhoto(selectedFile);
      }
    }
  };
  

  const uploadImage = async () => {
    if (!photo) return;

    // Validasi tipe file
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(photo.type)) {
      console.log("Invalid file type. Please upload a valid image file.");
      return;
    }

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const img = data["secure_url"];

      return img;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <>
        <Navbar />
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 mt-10">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
                Dashboard User
              </h2>
              <p>{session.data.user.name}</p>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <h1 className="text-2xl text-bold mb-4">Tambah Blog</h1>
              <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-black">
                  Judul Blog
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-black">
                  Deskripsi Singkat
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  maxLength="210"
                />
              </div>
              <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-black">
                  Image
                </label>
                <input
                  type="file"
                  id="name"
                  accept=".png, .jpg, .jpeg, .gif"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => handleFileChange(e)}
                />
                {photoError && <p className="text-red-500">{photoError}</p>}
              </div>
              <div className="mb-6">
                <label for="categories" class="block mb-2 text-sm font-medium text-black">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id="categories"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Pilih Kategori</option>
                  <option value="Pendidikan">Pendidikan</option>
                  <option value="Teknologi">Teknologi</option>
                  <option value="Budaya">Budaya</option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Agama">Agama</option>
                </select>
              </div>
              <div className="mb-6">
                <label for="content" className="block mb-2 text-sm font-medium text-black">
                  Content
                </label>
                <textarea
                  id="content"
                  placeholder="Content"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
            <div className="grid gap-8 lg:grid-cols-2 mt-5">
              {isLoading
                ? "loading"
                : data?.map((post) => (
                    <article
                      key={post._id}
                      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-green-700"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-primary-100 text-primary-800 text-l font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200">
                          {post.category}
                        </span>
                        <span
                          className="text-2xl text-red-600 cursor-pointer"
                          onClick={() => handleDelete(post._id)}
                        >
                          X
                        </span>
                      </div>
                      <Image src={post.img} alt="" width={100} height={100} className="mb-2" />
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                        <a href="#">{post.title}</a>
                      </h2>
                      <p className="mb-5">{post.desc}</p>
                    </article>
                  ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
