import React from "react";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    { id: 1, name: "Layanan", href: "/layanan" },
    { id: 2, name: "Blog", href: "/blog" },
  ];
  return (
    <div className="relative bg-black overflow-y-hidden">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 py-10 mx-auto mt-5 lg:grid-cols-5">
        <div className="lg:col-span-2 px-2">
          <div>
            {" "}
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-indigo-500"
            >
              <span>Blog JSS</span>
            </Link>
          </div>

          <div className="max-w-md mt-4 text-gray-500">
            Dapatkan akses mudah ke berbagai informasi penting untuk memudahkan kehidupanmu.
            Pelajari fitur baru dari Jogja Smart Service yang bisa membantu aktivitas sehari-hari
          </div>
        </div>
        <div>
          <div className="flex flex-wrap w-full px-2 -mt-2 -ml-3 lg:ml-0">
            <p className="text-indigo-500 ml-3 text-l">Produk</p>
            {navigation.map((i) => (
              <Link
                key={i.id}
                href={i.href}
                className="w-full px-4 py-2 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 text-sm text-center text-gray-600">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <span className="cursor-pointer">Blog JSS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
