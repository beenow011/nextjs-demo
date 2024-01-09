import Image from "next/image";
import Link from "next/link";
import React from "react";

function Postcard({ id, date, img, title, desc, grey }) {
  return (
    <div
      className={`flex flex-col gap-[20px]  mb-[20px] w-96 bg-purple-400/40 p-3 rounded-md ${
        grey && "blur-md"
      }`}
    >
      <div className="flex">
        <div className="relative w-80 h-96">
          <Image src={img} fill className="object-cover" alt="" />
        </div>
        <span className="text-md font-italic font-serif transform w-fit h-10 mt-10 rotate-90">
          {date}
        </span>
      </div>
      <div className="flex w-80 justify-between">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p>{desc}</p>
        </div>
        {/* <Link href="/blog/post">Read more</Link> */}
      </div>
    </div>
  );
}

export default Postcard;
