import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosMore, IoMdAddCircleOutline } from "react-icons/io";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const AlbumControlUI = () => {
  return (
    <div className="mt-6 flex items-center space-x-4 sm:space-x-6">
      <button className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500 rounded-full text-black text-lg flex items-center justify-center hover:scale-[110%] hover:bg-green-400 transition">
        <FaPlay />
      </button>
      <div className="flex space-x-3 sm:space-x-4 text-xl sm:text-2xl">
        <button className="text-gray-300 hover:scale-125 hover:text-white transition">
          <IoMdAddCircleOutline />
        </button>
        <button className="text-gray-300 hover:scale-125 hover:text-white transition">
          <IoArrowDownCircleOutline />
        </button>
        <button className="text-gray-300 hover:scale-125 hover:text-white transition">
          <IoIosMore />
        </button>
      </div>
    </div>
  );
};

export default AlbumControlUI;
