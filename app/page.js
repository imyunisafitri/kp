"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "../public/jss.png";
import Image from "next/image";
import imageNone from "../public/news1.jpg";
import imageNtwo from "../public/news2.jpg";
import imageNthree from "../public/news3.jpg";
import imageNfour from "../public/news4.jpg";
import channelOne from "../public/channel1.png";
import channelTwo from "../public/channel2.png";
import channelThree from "../public/channel3.png";
import channelFour from "../public/channel4.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dapatkan data dari API/post saat komponen dimuat
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://kp-steel.vercel.app/api/blogs`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };
  const news = [
    {
      id: 1,
      title: "Selamat Hari Raya Idul Adha 1444 H",
      url: "https://umumprotokol.jogjakota.go.id/detail/index/27931",
      date: "29 Juni, 2023",
      img: imageNone,
    },
    {
      id: 2,
      title: "Ratusan Pelajar se-Jawa Bali Hadir di Jogja Rebutkan Piala Raja Kejuaraan Renang",
      url: "https://warta.jogjakota.go.id/detail/index/27944",
      date: "2 Juli, 2023",
      img: imageNtwo,
    },
    {
      id: 3,
      title: "Menempa Diri Membentuk Jiwa Ikhlas Makna Peringatan Idul Adha 1444 H",
      url: "https://warta.jogjakota.go.id/detail/index/27932",
      date: "28 Juni, 2023",
      img: imageNthree,
    },
    {
      id: 4,
      title: "Kejuaraan Kempo Trofi Walikota Yogya 2023 Pacu Prestasi Atlet",
      url: "https://warta.jogjakota.go.id/detail/index/27945",
      date: "2 Juli, 2023",
      img: imageNfour,
    },
  ];
  const channel = [
    {
      id: 1,
      title: "Stop Peredaran Rokok Illegal",
      url: "https://www.youtube.com/watch?v=LUyoaRS_toY&ab_channel=PemkotJogja",
      img: channelOne,
    },
    {
      id: 2,
      title: "Penetapan Hari Jadi Perumda PDMA Yogyakarta",
      url: "https://www.youtube.com/watch?v=n5yDIFh0CFE&ab_channel=PemkotJogja",
      img: channelTwo,
    },
    {
      id: 3,
      title: "Grand Final Pemilihan Dimas Kanjeng Kota Jogja 2023",
      url: "https://www.youtube.com/watch?v=OcmPlhUso3w&ab_channel=PemkotJogja",
      img: channelThree,
    },
    {
      id: 4,
      title: "Layanan Pengadilan Negeri Yogyakarta di MPP Kota Yogyakarta",
      url: "https://www.youtube.com/watch?v=MfVqho_522A&ab_channel=PemkotJogja",
      img: channelFour,
    },
  ];
  return (
    <>
      <Navbar />
      {/* Hero Page */}
      <section className="bg-white dark:bg-green-600">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 mt-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Temukan Kemudahan dan Kenyamanan dengan JSS
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Dapatkan akses mudah ke berbagai informasi penting untuk memudahkan kehidupanmu.
              Pelajari fitur baru dari Jogja Smart Service yang bisa membantu aktivitas sehari-hari
            </p>
            <a
              href="/blog"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={Hero} alt="Hero Image" />
          </div>
        </div>
      </section>
      {/* News Card Page */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-2">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
              Berita Utama
            </h2>
            <p className="font-light text-gray-900 sm:text-xl dark:text-gray-400">
              Update Seputar Berita Kota Yogyakarta
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {news.map((dum) => (
              <article key={dum.id} className="p-6 rounded-lg border border-slate-600 shadow-md ">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">{dum.date}</span>
                </div>
                <Image src={dum.img} alt="" with={200} className="mb-5" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <a href="#">{dum.title}</a>
                </h2>
                <div className="flex justify-between items-center mb-5">
                  <a
                    href={dum.url}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Baca Selengkapnya
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-end mt-5">
            <Link
              href="https://warta.jogjakota.go.id"
              className="inline-flex items-center font-medium text-primary-600 dark:text-green-700 hover:underline"
            >
              Baca Lebih{" "}
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Video card page*/}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-2">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
              Channel Pemkot
            </h2>
            <p className="font-light text-gray-900 sm:text-xl dark:text-gray-400">
              Update Seputar Berita Melalui Channel Siaran
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {channel.map((c) => (
              <article key={c.id} class="p-6 rounded-lg border border-slate-600 shadow-md ">
                <Image src={c.img} alt="" with={200} className="mb-5" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <a href={c.url}>{c.title}</a>
                </h2>
              </article>
            ))}
          </div>
          <div className="flex justify-end mt-5">
            <Link
              href="https://www.youtube.com/channel/UCorpoVqJaPCdyVEtnZAS9pw/videos"
              className="inline-flex items-center font-medium text-primary-600 dark:text-green-700 hover:underline"
            >
              Lihat Lebih
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* blog after approved */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-2">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
              Update Blog
            </h2>
            <p className="font-light text-gray-900 sm:text-xl dark:text-gray-400">
              Update Seputar Blog Jss
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {posts
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 4)
              .map((post) => (
                <article key={post.id} className="p-6 rounded-lg border border-slate-600 shadow-md">
                  <Image src={post.img} alt="" width={200} height={200} className="mb-5" />
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <a href="/blog">{post.title}</a>
                  </h2>
                </article>
              ))}
          </div>
          <div className="flex justify-end mt-5">
            <Link
              href="/blog"
              className="inline-flex items-center font-medium text-primary-600 dark:text-green-700 hover:underline"
            >
              Baca Lebih
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
