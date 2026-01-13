import { useState, useRef } from "react";
// icon\
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
//
import Download from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import AccessTime from "@mui/icons-material/AccessTime";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function VideoFrontEndCorse({
  titels,
  srcImage,
  lestname,
  srcVideo,
}) {
  const navigate = useNavigate();

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const openVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300);
  };

  const closeVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };
  const goTovide = () => {
    navigate("/gotovideo");
  };
  return (
    <>
      <div className="imag-all">
        <a href={srcVideo}>
          <img src={srcImage} onClick={openVideo} alt="eroo" />
        </a>
        <h4
          style={{
            textAlign: "justify",
            color: "#a19f9fff",
            marginLeft: "6px",
            fontFamily: "lighter",
            paddingTop: "6px",
          }}
        >
          {lestname}
        </h4>
        <h4
          style={{
            textAlign: "justify",
            marginLeft: "6px",
            marginRight: "6px",
          }}
        >
          {titels}
        </h4>

        <hr style={{ width: "93%", marginLeft: "8px", marginTop: "9px" }} />
        <div className="img-icons">
          <div>
            <AccessTime
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginTop: "6px",
                marginLeft: "14px",
              }}
            />
            <span>22hr 30min</span>
          </div>
          <div>
            <OndemandVideo
              style={{
                width: "1.3rem",
                height: "1.3rem",
                marginTop: "6px",
                marginLeft: "12px",
              }}
            />
            <span>34 Courses</span>
          </div>
          <div>
            <Download
              style={{
                width: "1.2rem",
                height: "1.2rem",
                marginTop: "6px",
                marginLeft: "8px",
              }}
            />
            <span>250 Sales</span>
          </div>
        </div>

        {/* {showVideo && (
          <div id="btn-overlay-active">
            <video
              style={{
                zIndex: "999",
                borderRadius: "5px",
                width: "60%",
                height: "70%",
              }}
              ref={videoRef}
              z-index="100"
              controls
              playsInline
              preload="metadata"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
              {" "}
            </video>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                position: "absolute",
                left: "15rem",
                top: "34rem",
              }}
            >
              <IconButton
                onClick={handleLike}
                color={liked ? "error" : "default"}
                aria-label="like"
              >
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography variant="body1">{count}</Typography>
            </div>
            <CloseIcon
              onClick={closeVideo}
              style={{
                fontSize: "1.4rem",
                marginRight: "16px",
                marginTop: "-26rem",
              }}
            />
          </div>
        )} */}
      </div>
    </>
  );
}
