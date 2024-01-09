import React from "react";
import Postcard from "@/components/postcard/Postcard";
function page() {
  return (
    <div className="m-24 flex gap-10 flex-wrap justify-center items-center">
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
  );
}

export default page;
