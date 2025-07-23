import AlbumHeaderUI from "./AlbumHeaderUI";
import AlbumControlUI from "./AlbumControlUI";
import AlbumSongTableUI from "./AlbumSongTableUI";
import AlbumRecommendPlaylistUI from "./AlbumRecommendPlaylistUI";

const AlbumUI = () => {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, #04dbdc , #000000 20%)",
      }}
    >
      <div className="relative z-10  mx-auto">
        {/* Header */}
        <AlbumHeaderUI />

        {/* Controls */}
        <div className="p-4 sm:p-6 backdrop-blur-2xl">
          <AlbumControlUI />

          {/* Song Table */}
          <AlbumSongTableUI />
        </div>

        {/* Recommendation Playlist */}
        <AlbumRecommendPlaylistUI />
      </div>
    </div>
  );
};

export default AlbumUI;
