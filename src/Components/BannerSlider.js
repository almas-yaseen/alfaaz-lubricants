import React, { useRef, useEffect } from "react";
import video from "../videos/video.mp4";
const BannerVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const stopVideoAtEnd = () => {
      if (videoElement.currentTime >= 185) {
        videoElement.pause();
      }
    };

    videoElement.addEventListener("timeupdate", stopVideoAtEnd);

    // Clean up the event listener when the component is unmounted
    return () => {
      videoElement.removeEventListener("timeupdate", stopVideoAtEnd);
    };
  }, []);

  return (
    <div className="banner-container">
      <video ref={videoRef} width="100%" height="500px" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
