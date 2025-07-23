import React, { useState } from "react";
import { BsFillExplicitFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const AlbumSongTableUI = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "true",
    },
    {
      id: 2,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 3,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "false",
    },
    {
      id: 4,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "true",
    },
    {
      id: 5,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "false",
    },
    {
      id: 6,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "false",
    },
    {
      id: 7,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 8,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "true",
    },
    {
      id: 9,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "false",
    },
    {
      id: 10,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "false",
    },
    {
      id: 11,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "true",
    },
    {
      id: 12,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 13,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "false",
    },
    {
      id: 14,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "false",
    },
    {
      id: 15,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "false",
    },
    {
      id: 16,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "true",
    },
    {
      id: 17,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 18,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "false",
    },
    {
      id: 19,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "false",
    },
    {
      id: 20,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "false",
    },
    {
      id: 21,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "true",
    },
    {
      id: 22,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 23,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "false",
    },
    {
      id: 24,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "true",
    },
    {
      id: 25,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "false",
    },
    {
      id: 26,
      img_url: "https://picsum.photos/200?random=1",
      title: "Exit Sign",
      artists: "HIEUTHUHAI, marzuz",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:21",
      explicited: "true",
    },
    {
      id: 27,
      img_url: "https://picsum.photos/200?random=2",
      title: "MOIEM",
      artists: "Dangrangto, DONAL",
      album: "MOIEM",
      time: "3:11",
      explicited: "false",
    },
    {
      id: 28,
      img_url: "https://picsum.photos/200?random=3",
      title: "Không Thể Say",
      artists: "HIEUTHUHAI",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      time: "3:48",
      explicited: "true",
    },
    {
      id: 29,
      img_url: "https://picsum.photos/200?random=4",
      title: "Em iu",
      artists: "Andree Right Hand, Wxrdie, Donald Gold, 2pillz",
      album: "Em iu",
      time: "2:59",
      explicited: "false",
    },
    {
      id: 30,
      img_url: "https://picsum.photos/200?random=5",
      title: "TRÌNH",
      artists: "HIEUTHUHAI",
      album: "TRÌNH",
      time: "4:35",
      explicited: "true",
    },
  ];
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full text-left text-sm divide-y divide-white/10 w-full">
        <thead className="hidden sm:table-header-group">
          <tr className="group text-gray-400 uppercase text-xs border-b border-white/10">
            <th className="px-2 py-3 w-10">#</th>
            <th className="px-2 py-3">Title</th>
            <th className="px-2 py-3 hidden sm:table-cell">Album</th>
            <th className="px-2 py-3 w-20 text-right">
              <div className="flex justify-end items-center gap-2">
                Time
                <GoTriangleDown className="text-lg text-gray-300 group-hover:opacity-100 opacity-0 transition-opacity duration-200" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 ">
          {songs.map((song, index) => (
            <tr
              key={song.id}
              className="group hover:bg-white/10 transition-colors duration-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <td className="px-2 py-3 text-gray-400 text-left">
                {hoveredIndex === index ? (
                  <FaPlay className="hover:text-white hover:scale-110" />
                ) : (
                  index + 1
                )}
              </td>

              <td className="px-2 py-3 flex items-center gap-3">
                <img
                  src={song.img_url}
                  className="w-10 h-10 object-cover rounded"
                  alt={song.title}
                />
                <div className="truncate">
                  <div className="text-white font-medium flex items-center gap-1 hover:underline">
                    {song.title}
                    {song.explicited === "true" && <BsFillExplicitFill />}
                  </div>
                  <div className="text-gray-400 text-xs truncate hover:underline">
                    {song.artists}
                  </div>
                </div>
              </td>

              <td className="px-2 py-3 text-gray-400 hidden sm:table-cell hover:underline">
                {song.album}
              </td>

              <td className="px-2 py-3 text-gray-400 hidden sm:table-cell text-right">
                <div className="flex justify-end items-center gap-3">
                  <IoArrowDownCircleOutline className="text-gray-300 group-hover:opacity-100 opacity-0 transition duration-200 text-xl hover:text-white hover:scale-110" />
                  {song.time}
                  <IoIosMore className="text-gray-300 group-hover:opacity-100 opacity-0 transition duration-200 text-xl hover:text-white hover:scale-110" />
                </div>
              </td>

              {/* Mobile-only more icon */}
              <td className="px-2 py-3 text-right sm:hidden">
                <button className="text-gray-300 hover:text-white">
                  <IoIosMore />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumSongTableUI;
