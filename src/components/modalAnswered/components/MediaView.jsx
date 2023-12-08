import React, { useRef, useEffect } from "react";

const MediaView = ({ mediaStream }) => {
  const videoRef = useRef(null);
  const setStream = (stream) => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  useEffect(() => {
    setStream(mediaStream);
  }, [mediaStream]);

  return (
    <video style={{ display: "none" }} ref={videoRef} autoPlay playsInline />
  );
};

export default MediaView;
