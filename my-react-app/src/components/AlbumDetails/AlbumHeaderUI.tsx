import React from "react";

const AlbumHeaderUI = () => {
  return (
    <div className="h-auto sm:h-[35vh] flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 p-6">
      <img
        src="https://picsum.photos/200?random=6"
        alt="HIEUTHUHAI Mix"
        className="w-32 h-32 sm:w-60 sm:h-60 object-cover rounded shadow-xl"
      />
      <div className="text-center sm:text-left">
        <p className="uppercase text-xs sm:text-sm font-semibold">
          Public Playlist
        </p>
        <h1 className="text-2xl sm:text-5xl font-bold mb-1 sm:mb-2">
          HIEUTHUHAI Mix
        </h1>
        <p className="text-xs sm:text-sm text-white/80">
          Donald Gold, SOOBIN and WEAN
        </p>
        <p className="text-xs sm:text-sm text-white/60 mt-1">
          Spotify • 50 songs, about 3 hr
        </p>
      </div>
    </div>
  );
};

export default AlbumHeaderUI;
