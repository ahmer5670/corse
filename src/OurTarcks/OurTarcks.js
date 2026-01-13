import "./OurTarck.css";
import Sumsuing from "./image/ux ui ptrfel.png";
import Secrennn from "./frontend/imageFront/imagesfront end.jpeg";
import Secren from "./BackEnd/imageBack/images protfel.jpeg";
import AccessTime from "@mui/icons-material/AccessTime";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import Download from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import React from "react";
export default function OurTarcks() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  // Add video
  const openVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 200);
  };
  const closeVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  function handleJoinCourse() {
    openVideo();
    const btn = document.getElementById("btn-play");
    btn.classList.add("btn-play-active");
    btn.style.display = "flex";
  }
  function handleClose() {
    closeVideo();
    const btn = document.getElementById("btn-play");
    btn.style.display = "none";
  }
  // ===Add video

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/coser");
  };

  const goToFrontEnd = () => {
    navigate("/frontend");
  };
  const goToBackEnd = () => {
    navigate("/backend");
  };
  return (
    <div id="corser">
      <div>
        <h1 className="name-our-tarckes">Our Tarcks</h1>
        <h4>Lorem ipsum is dummy text of the popular</h4>
      </div>
      <div>
        <div className="imag-icons-cont">
          <div className="imag-all">
            <img onClick={handleJoinCourse} src={Sumsuing} alt="eroo" />
            <h4
              style={{
                textAlign: "justify",
                color: "#a19f9fff",
                marginLeft: "6px",
                fontFamily: "lighter",
                paddingTop: "6px",
              }}
            >
              UL/UX Design
            </h4>
            <h4 className="titel-corse">UL/UX Design for Beginners</h4>

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

            <button
              onClick={goToAbout}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                marginTop: "13px",
                background: "gold",
              }}
            >
              Join Course
            </button>

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
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                ></video>

                <CloseIcon
                  onClick={handleClose}
                  style={{
                    fontSize: "1.4rem",
                    marginRight: "16px",
                    marginTop: "-26rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="imag-all-all">
            <img src={Secrennn} alt="eroo" />
            <h4
              style={{
                textAlign: "justify",
                color: "#a19f9fff",
                marginLeft: "6px",
                fontFamily: "lighter",
                paddingTop: "6px",
              }}
            >
              Html Css Js React
            </h4>
            <h4 className="titel-corse">Front End Development</h4>

            <hr style={{ width: "93%", marginLeft: "8px", marginTop: "9px" }} />
            <div className="img-icons">
              <div>
                <AccessTime
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                    marginTop: "6px",
                    marginLeft: "13px",
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
                    width: "1.3rem",
                    height: "1.3rem",
                    marginTop: "6px",
                    marginLeft: "8px",
                  }}
                />
                <span>250 Sales</span>
              </div>
            </div>
            <button
              onClick={goToFrontEnd}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                marginTop: "13px",
                background: "gold",
              }}
            >
              Join Course
            </button>
          </div>

          <div className="imag-all-all-all">
            <img src={Secren} alt="eroo" />
            <h4
              style={{
                textAlign: "justify",
                color: "#a19f9fff",
                marginLeft: "6px",
                fontFamily: "lighter",
                paddingTop: "6px",
              }}
            >
              Node.js sqol Express.js PHP NOSqol MERN
            </h4>
            <h4 className="titel-corse" style={{ marginBottom: "0px" }}>
              Back End Development
            </h4>

            <hr style={{ width: "93%", marginLeft: "8px", marginTop: "9px" }} />
            <div className="img-icons">
              <div>
                <AccessTime
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                    marginTop: "6px",
                    marginLeft: "13px",
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
                    width: "1.3rem",
                    height: "1.3rem",
                    marginTop: "6px",
                    marginLeft: "8px",
                  }}
                />
                <span>250 Sales</span>
              </div>
            </div>
            <button
              onClick={goToBackEnd}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                marginTop: "13px",
                background: "gold",
              }}
            >
              Join Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
