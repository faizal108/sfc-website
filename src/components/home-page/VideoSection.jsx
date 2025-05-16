import React from "react";
import Video from "@assets/photos/video.png";

function VideoSection({ bgColor = "bg-white", textColor = "text-black" }) {
  return (
    <section
      className={`${bgColor} w-full h-full flex flex-col justify-center items-center px-4 py-12 gap-y-10 home-video-mask`}
    >
      <p
        className={`font-bold uppercase text-[28px] md:text-[36px] text-center ${textColor}`}
      >
        Experience the Magic of SFN 2024
      </p>
      <div className="w-full max-w-[1200px] max-h-[677px] min-h-auto shadow-md rounded-[50px]">
        <img src={Video} alt="Experience SFN" className="object-contain" />
      </div>
    </section>
  );
}

export default VideoSection;
