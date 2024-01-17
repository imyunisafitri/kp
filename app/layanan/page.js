import React from "react";
import Image from "next/image";
import Link from "next/link";
import imageOne from "../../public/layanan/pengaduan.png";
import imageTwo from "../../public/layanan/konsolidasi data penduduk.png";
import imageThree from "../../public/layanan/Keluarga Berencana (KB).png";
import imageFour from "../../public/layanan/Info Antrian KIR.png";
import imageFive from "../../public/layanan/Antrian Puskesmas.png";
import imageSix from "../../public/layanan/Konsultasi Belajar Siswa (KBS).png";
// import imageSeven from "../../public/layanan/e-katalog.png";
import imageEight from "../../public/layanan/Event Wisata.png";
import imageNine from "../../public/layanan/JSS Chat Asisten.png";
import imageTen from "../../public/layanan/e-Sewa.png";
import imageEleven from "../../public/layanan/E-Retribusi Pasar.png";
import imageTwelve from "../../public/layanan/Jobfair.png";
import imageThreetenn from "../../public/layanan/Gawat Darurat.png";
import imageFourteen from "../../public/layanan/Pemesanan Mobil Jenazah.png";
import imageFiveteen from "../../public/layanan/Pasar.png";
import imageSixteen from "../../public/layanan/Warta Kota.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layanan() {
  const layanan = [
    {
      id: 1,
      title: "Pengaduan",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageOne,
    },
    {
      id: 2,
      title: "Kependudukan dan Catatan Sipil",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageTwo,
    },
    {
      id: 3,
      title: "Pengendalian Penduduk",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageThree,
    },
    {
      id: 4,
      title: "Perhubungan",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageFour,
    },
    {
      id: 5,
      title: "Kesehatan",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageFive,
    },
    {
      id: 6,
      title: "PISA",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageSix,
    },
    {
      id: 7,
      title: "Pengaduan Barang dan Jasa",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageSeven,
    },
    {
      id: 8,
      title: "Pariwisata dan Budaya",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageEight,
    },
    {
      id: 9,
      title: "Layanan Umum",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      date: "29 Juni, 2023",
      img: imageNine,
    },
    {
      id: 10,
      title: "Mal Pelayanan Publik",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageTen,
    },
    {
      id: 11,
      title: "Pajak dan Retribusi",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageEleven,
    },
    {
      id: 12,
      title: "Tenaga Kerja",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageTwelve,
    },
    {
      id: 13,
      title: "Kedaruratan",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageThreetenn,
    },
    {
      id: 14,
      title: "Sosial",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageFourteen,
    },
    {
      id: 15,
      title: "Perdagangan",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageFiveteen,
    },
    {
      id: 16,
      title: "Portal Berita",
      url: "https://jss.jogjakota.go.id/v5/aplikasi/tree",
      img: imageSixteen,
    },
  ];
  return (
    <>
    <Navbar/>
  <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 mt-10">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-90">
            Layanan Jogja Smart Service
          </h2>
          <p className="font-light text-gray-900 sm:text-xl dark:text-gray-400">
            Kumpulan Layanan Penunjang JSS
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {layanan.map((l) => (
            <article
              key={l.id}
              class="p-3 rounded-lg border border-slate-400 hover:shadow-2xl"
            >
              <div className="flex items-center flex-col justify-center">
                <Image src={l.img} alt="" width={75} className="mb-5" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                  <a href={l.url}>{l.title}</a>
                </h2>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <Link
            href="https://jss.jogjakota.go.id/v5/aplikasi/tree"
            className="inline-flex items-center font-medium text-primary-600 dark:text-green-700 hover:underline"
          >
            Lihat Layanan
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
    <Footer/>
    </>
  
  );
}
