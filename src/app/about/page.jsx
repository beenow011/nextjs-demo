import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="relative w-96 h-96">
        <Image src="/about.png" fill />
      </div>
    </div>
  );
}

export default page;
