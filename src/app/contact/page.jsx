import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="lg:flex my-6 justify-center items-center md:mx-[100px]">
      <div className="relative h-96 w-96 md:h-[700px] md:w-[700px] flex-1 m-auto">
        <Image src="/contact.png" fill className="object-contain" />
      </div>
      <div className="flex-1 mt-12">
        <form
          className="flex gap-y-9 flex-col justify-center items-center"
          action="submit"
        >
          <input
            className="p-5 w-96 md:w-[500px] bg-neutral-900 rounded-lg text-white"
            type="text"
            placeholder="name"
          />
          <input
            className="p-5 w-96 md:w-[500px] bg-neutral-900 rounded-lg text-white"
            type="email"
            placeholder="email"
          />
          <input
            className="p-5 w-96 md:w-[500px] bg-neutral-900 rounded-lg text-white"
            type="text"
            placeholder="phone number (optional)"
          />
          <textarea
            className="p-5 w-96 md:w-[500px] bg-neutral-900 rounded-lg text-white"
            placeholder="message"
          ></textarea>
          <button className="p-5 w-64 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
