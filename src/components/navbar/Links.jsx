"use client";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { SiAboutDotMe, SiAboutdotme } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import Link from "next/link";
import Icons from "./Icons";
import { RiAdminLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
function Links() {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  const pathName = usePathname();
  const navItems = [
    {
      href: "/",
      name: "Home",
      icon: AiOutlineHome,
      active: pathName === "/",
    },
    {
      href: "/about",
      name: "About",
      icon: SiAboutdotme,
      active: pathName === "/about",
    },
    {
      href: "/contact",
      name: "Contact",
      icon: GrContact,
      active: pathName === "/contact",
    },
    {
      href: "/blog",
      name: "Blog",
      icon: FaBlog,
      active: pathName === "/blog",
    },
  ];
  //   pathname && console.log(pathname);
  return (
    <div>
      <div className="hidden md:block">
        <ul className="flex">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`m-3 text-white hover:text-white/40 transition ${
                item.active &&
                "bg-gradient-to-b text-white from-blue-500/40 to-blue-500  rounded-lg transition"
              }`}
            >
              <Link href={item.href}>
                <div className="p-2 flex flex-col justify-center items-center">
                  <Icons icon={item.icon} />
                  <p className="mt-3 font-semibold">{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <li className="m-3 text-white hover:text-white/40 transition">
                  <Link href="/admin">
                    <div
                      className={`p-2 flex flex-col justify-center items-center ${
                        pathName === "/admin" &&
                        "bg-gradient-to-b from-red-400 to-red-300 text-black rounded-lg"
                      }`}
                    >
                      <Icons icon={RiAdminLine} />
                      <p className="mt-3 font-semibold">Admin</p>
                    </div>
                  </Link>
                </li>
              )}
              <li className="m-3 text-white hover:text-white/40 transition">
                <button
                  className={`p-2 flex flex-col justify-center items-center bg-white/40 text-white hover:bg-neutral-500 rounded-md`}
                >
                  <p className="p-3 font-semibold">Logout</p>
                </button>
              </li>
            </>
          ) : (
            <li className="m-3 text-white hover:text-white/40 transition">
              <button
                className={`p-2 flex flex-col justify-center items-center bg-white/40 text-white hover:bg-neutral-500 rounded-md`}
              >
                <p className="p-3 font-semibold">Login</p>
              </button>
            </li>
          )}
        </ul>
      </div>
      <button
        className="md:hidden p-5"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <AiOutlineMenu className="text-white" />
      </button>
      {open && (
        <div className="absolute shadow font-semibold md:hidden top-[100px] rounded-md bg-gradient-to-r from-[#872cc3] to-[#77357e] right-0 w-1/2 h-[calc(100vh-150px)] flex flex-col items-center justify-center gap-[10px]">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={twMerge(
                "text-white mx-5 ",
                `${item.active && "bg-white text-black rounded-xl p-2"}`
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <div className="m-3 text-white hover:text-white/40 transition">
                  <Link href="/admin">
                    <div
                      className={`p-2 flex flex-col justify-center items-center ${
                        pathName === "/admin" &&
                        "bg-gradient-to-b from-red-400 to-red-300 text-black rounded-lg"
                      }`}
                    >
                      <Icons icon={RiAdminLine} />
                      <p className="mt-3 font-semibold">Admin</p>
                    </div>
                  </Link>
                </div>
              )}
              <div className="m-3 text-white hover:text-white/40 transition">
                <button
                  className={`p-2 flex flex-col justify-center items-center bg-white/40 text-white hover:bg-neutral-500 rounded-md`}
                >
                  <p className="p-3 font-semibold">Logout</p>
                </button>
              </div>
            </>
          ) : (
            <div className="m-3 text-white hover:text-white/40 transition">
              <button
                className={`p-2 flex flex-col justify-center items-center bg-white/40 text-white hover:bg-neutral-500 rounded-md`}
              >
                <p className="p-3 font-semibold">Login</p>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Links;
