import Image from "next/image";
import Link from "next/link";
import React from "react";

function Preview({ id, date, img, title, desc }) {
  return (
    <div className="flex w-[40vw] h-1/2 text-white bg-neutral-800/60 p-5 rounded-md">
      <div className="w-1/3 h-96 relative flex-1">
        <Image src={img} fill className="object-cover" alt="" />
      </div>
      <div className="flex-1 flex flex-col justify-evenly p-3">
        <div>
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-sm ">{date}</p>
        </div>
        <div className="flex justify-between">
          <Link
            href="/blog/id"
            className="bg-black text-white p-3 hover:bg-black/40 "
          >
            Read more
          </Link>
          <p className="p-3 truncate">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
