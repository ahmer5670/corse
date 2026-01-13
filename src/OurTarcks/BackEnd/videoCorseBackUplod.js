import { useState, useRef, useContext } from "react";
// icon
import Download from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import AccessTime from "@mui/icons-material/AccessTime";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import React from "react";

export default function VideoBackEndCorseUplod({ uplodesVideo }) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

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
    }
  };

  return (
    <>
      {!uplodesVideo || uplodesVideo.length === 0 ? (
        <p></p>
      ) : (
        uplodesVideo.map((item, index) => (
          <div key={index} className="imag-all">
            <a href={item.srcVideo}>
              <img onClick={openVideo} src={item.imag} alt="eroo" />
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
              Back end
            </h4>
            <h4
              style={{
                textAlign: "justify",
                marginLeft: "6px",
                marginRight: "6px",
              }}
            >
              {item.name}
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
              <div id="btn-play" style={{ display: "none" }}>
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
                    src={item.srcVideo}
                  ></video>

                  <CloseIcon
                    onClick={closeVideo}
                    style={{
                      fontSize: "1.4rem",
                      marginRight: "16px",
                      marginTop: "-26rem",
                    }}
                  />
                </div>
              </div>
            )} */}
          </div>
        ))
      )}
    </>
  );
}
