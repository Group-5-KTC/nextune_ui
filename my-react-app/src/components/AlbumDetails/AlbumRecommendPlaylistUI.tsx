import React from "react";
import { FaPlay } from "react-icons/fa";

const AlbumRecommendPlaylistUI = () => {
  const playLists = [
    {
      id: 1,
      img_url: "https://picsum.photos/200?random=6",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
    {
      id: 2,
      img_url: "https://picsum.photos/200?random=7",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
    {
      id: 3,
      img_url: "https://picsum.photos/200?random=8",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
    {
      id: 4,
      img_url: "https://picsum.photos/200?random=9",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
    {
      id: 5,
      img_url: "https://picsum.photos/200?random=10",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
    {
      id: 6,
      img_url: "https://picsum.photos/200?random=11",
      name: "Top 10 nhạc vàng 2025",
      owner: "Spotify",
    },
  ];
  return (
    <div className="p-4 sm:p-6 hidden sm:block">
      <h2 className="uppercase font-bold text-xl sm:text-2xl mb-4 pl-4">
        You might also like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {playLists.map((playList) => (
          <div
            key={playList.id}
            className="group relative hover:bg-gray-500/20 p-4 rounded-lg transition "
          >
            <div className="relative w-full aspect-square">
              <img
                src={playList.img_url}
                alt={playList.name}
                className="w-full h-full object-cover rounded shadow-xl mb-4"
              />
              <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg">
                <FaPlay />
              </button>
            </div>
            <div>
              <h3 className="text-white font-medium text-lg truncate hover:underline mt-2 ">
                {playList.name}
              </h3>
              <p className="text-gray-400 text-xs hover:underline">
                By {playList.owner}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumRecommendPlaylistUI;
