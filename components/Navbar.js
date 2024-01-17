"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const navigation = [
    { id: 1, name: "Beranda", href: "/" },
    { id: 2, name: "Layanan", href: "/layanan" },
    { id: 3, name: "Blog", href: "/blog" },
  ];
  const session = useSession();
  return (
    <div className="w-full dark:bg-green-600 fixed z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-4">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-white">
                    <span>Blog JSS</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="w-full px-4 py-2 -ml-4 text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="mr-3 space-x-4 lg:flex nav__item">
                      {session.status === "unauthenticated" && (
                        <Link
                          href="/dashboard/login"
                          className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
                        >
                          Login
                        </Link>
                      )}
                      {session.status === "authenticated" && (
                        <Link
                          href="/dashboard/user"
                          className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
                        >
                          Dashboard
                        </Link>
                      )}
                      {session.status === "authenticated" && (
                        <button
                          className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
                          onClick={signOut}
                        >
                          Logout
                        </button>
                      )}
                    </div>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item) => (
              <li className="mr-3 nav__item" key={item.id}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {session.status === "unauthenticated" && (
            <Link
              href="/dashboard/login"
              className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
            >
              Login
            </Link>
          )}
          {session.status === "authenticated" && (
            <Link
              href="/dashboard/user"
              className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
            >
              Dashboard
            </Link>
          )}
          {session.status === "authenticated" && (
            <button
              className="px-6 py-2 text-white bg-green-400 rounded-md md:ml-5"
              onClick={signOut}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
