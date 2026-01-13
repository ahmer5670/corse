import { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import Download from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import AccessTime from "@mui/icons-material/AccessTime";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import React from "react";
export default function LoginVideoFront() {
  const [openvideoFront, OpenVideoFront] = useState(false);
  const videoRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };
  return (
    <div>
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
      ></video>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <IconButton
          onClick={handleLike}
          color={liked ? "error" : "default"}
          aria-label="like"
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body1">{count}</Typography>
      </div>
    </div>
  );
}
