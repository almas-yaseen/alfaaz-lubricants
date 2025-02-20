import React from "react";

const BannerVideo = () => {
  return (
    <div className="banner-container">
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/YrdZv4euay0?autoplay=1&mute=1&loop=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BannerVideo;
