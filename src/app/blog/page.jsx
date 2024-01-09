"use client";
import React, { useEffect, useState } from "react";
import Postcard from "@/components/postcard/Postcard";
import { AnimatePresence, motion } from "framer-motion";
import Preview from "@/components/postcard/Preview";
function page() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});
  const [isVisible, setVisible] = useState(false);
  const handleClick = (id) => {
    setSelectedId(id);
    setSelectedItem(items.find((item) => item.id === selectedId));
  };
  const items = [
    {
      id: 1,
      date: "2022-03-04",
      img: "/post4.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post2.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post3.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post4.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post4.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post2.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post3.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
    {
      id: 1,
      date: "2022-03-04",
      img: "/post4.jpg",
      title: "hello wrold",
      desc: "Abhinav",
    },
  ];
  return (
    <div className="m-24  flex gap-10 flex-wrap justify-center items-center">
      {items.map((item) => (
        <motion.div onTap={() => setVisible(!isVisible)} className="">
          {!isVisible && <Postcard {...item} grey={isVisible} />}

          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Preview {...items[0]} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default page;
