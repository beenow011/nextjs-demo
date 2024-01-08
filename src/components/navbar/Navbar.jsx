import Link from "next/link";
import React from "react";
// import { AiFillHome } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import Links from "./Links";
function Navbar() {
  return (
    <div className="flex justify-between p-3">
      <div className="p-5 hover:text-neutral-700 transition">
        <Link href="/">
          <SiNextdotjs size={36} className="text-white" />
        </Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
