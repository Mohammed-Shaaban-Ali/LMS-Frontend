"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  videoUrl: string;
};

function CoursePlayer({ videoUrl }: Props) {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  // console.log({videoUrl});
  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/get-vdocipher-otp`, {
        videoId: videoUrl,
      })
      .then((response) => {
        // console.log({ response, videoUrl });
        setVideoData(response.data);
      });
  }, [videoUrl]);

  return (
    <VideoPlayer otp={videoData.otp} playbackInfo={videoData.playbackInfo} />
  );
}

type Propsplayer = {
  otp: string;
  playbackInfo: string;
};

const VideoPlayer = ({ otp, playbackInfo }: Propsplayer) => {
  if (otp !== "") {
    const iframeSrc = `https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`;

    return (
      <div style={{ paddingTop: "41%", position: "relative" }}>
        <iframe
          src={iframeSrc}
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "100%",
            height: "100%",
            width: "100%",
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
};

export default CoursePlayer;
