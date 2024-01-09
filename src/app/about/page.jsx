import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="md:flex mx-7">
      <div className="flex-1 p-5 flex flex-col gap-y-4 md:ml-5 justify-center ">
        <h2 className="font-semibold text-3xl text-blue-700">About me</h2>
        <h1 className="text-wrap text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h1>
        <p className="text-wrap text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
          quis quibusdam. Quas nihil esse, sit officiis quibusdam dicta minima
          officia saepe id qui. Totam quas est tempora sapiente nam.
        </p>
        <div className="flex gap-6 mt-8">
          <div>
            <h1 className="text-blue-400 text-3xl">10k+</h1>
            <p className="text-lg ">lorem lorem</p>
          </div>
          <div>
            <h1 className="text-blue-400 text-3xl">10k+</h1>
            <p className="text-lg ">lorem lorem</p>
          </div>
          <div>
            <h1 className="text-blue-400 text-3xl">10k+</h1>
            <p className="text-lg ">lorem lorem</p>
          </div>
        </div>
      </div>
      <div className="relative w-60 h-60 my-4 md:h-[400px] md:w-auto xl:h-[800px] rounded-lg  m-auto flex-1">
        <Image src="/about.png" fill className="object-contain" />
      </div>
    </div>
  );
}

export default page;
