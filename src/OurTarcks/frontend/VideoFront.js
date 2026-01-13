// icon
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcdon from "@mui/icons-material/Mic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// hooks
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// imag
import imageFron1 from "./imageFront/images (1).jpeg";
import imageFron11 from "./imageFront/images (1.1).jpeg";
import imageFron12 from "./imageFront/images (1.2).jpeg";

import imageFron2 from "./imageFront/images (2).jpeg";
import imageFron22 from "./imageFront/images (2.2).jpeg";
import imageFron3 from "./imageFront/images (3).jpeg";
import imageFron4 from "./imageFront/images (4).jpeg";

// copomt
import UplodVideoFront from "./uplodVideoFront";
import VideoFrontEndCorse from "./videoCorseFront.js";
import VideoCorseFrontUplod from "./videoCorseFrontUplod.js";

export default function Frontend() {
  const navigate = useNavigate();
  //   hooks
  const [openUplod, setOpenUplod] = useState(false);
  const [uplodesVideoFront, setUplodesVideoFront] = useState([]);

  const goHome = () => {
    navigate("/");
  };
  const goToAbout = () => {
    navigate("/coser");
  };

  const goToFrontEnd = () => {
    navigate("/frontend");
  };
  const goToBackEnd = () => {
    navigate("/backend");
  };
  const handleOpenUplodeVideo = () => {
    setOpenUplod(true);
  };
  const handleCloseUplodeVideo = () => {
    setOpenUplod(false);
  };

  const addVideo = (newVideo) => {
    setUplodesVideoFront((prev) => [...prev, newVideo]);
  };
  return (
    <>
      <div className="nav-ber">
        <MenuIcon style={{ marginLeft: "1rem", marginRight: "2rem" }} />
        <div className="nameh1-nabr">
          <h1>Frontend</h1>
        </div>
        <div className="navbers-contect">
          <div style={{ marginLeft: "-3rem", marginTop: "-1.2rem" }}>
            <input
              placeholder="search"
              style={{
                width: "28rem",
                height: "0.7rem",
                padding: "10px",
                borderRadius: "10px",

                marginRight: "20px",
              }}
            ></input>{" "}
            <SearchIcon style={{ marginLeft: "-18px" }} />
          </div>
          <div className="icon-nav-bar">
            <MicIcdon className="margin-right" />
            <NotificationsIcon className="margin-right" />
            <AppsIcon className="margin-right" />
            <AccountCircleIcon className="margin-right" />
            <ArrowUpwardIcon
              onClick={handleOpenUplodeVideo}
              className="margin-right"
            />
          </div>
        </div>
        <button onClick={goHome} className="btn-get-started">
          Go Home
        </button>
      </div>
      {/*  */}
      {/* UplodVideo */}
      {openUplod && (
        <UplodVideoFront
          setUplodesVideo={addVideo}
          onClose={handleCloseUplodeVideo}
        />
      )}
      <div className="all-corse">
        {/* 1 */}
        <VideoFrontEndCorse
          titels="كورس فروانت اند كامل للمبتدئين محاضره الاولي"
          srcImage={imageFron1}
          lestname="html"
          srcVideo="https://youtu.be/ycFzSnEBRVo?si=NUPSEuGFlDLTZsVm"
        />
        {/* 1.1 */}
        <VideoFrontEndCorse
          titels="كورس فرونت اند كامل للمبتدئين محاضره التاني"
          srcImage={imageFron11}
          lestname="css"
          srcVideo="https://m.youtube.com/watch?v=xNSb7NeEoD0&list=PLy87-TjmU9VW5eMbMHTBcsvZtHOlHD4rP&index=2&pp=iAQB"
        />
        {/* 1.2*/}
        <VideoFrontEndCorse
          titels="كورس فرونت اند كامل للمبتدئين محاضره الثالث"
          srcImage={imageFron12}
          lestname="css"
          srcVideo="https://m.youtube.com/watch?v=9KtPnOTKSUQ&list=PLy87-TjmU9VW5eMbMHTBcsvZtHOlHD4rP&index=3&pp=iAQB"
        />
        {/* 2 */}
        <VideoFrontEndCorse
          titels="خارطه تعلم تطوير تطبيقات الويب فروانت اند "
          srcImage={imageFron2}
          lestname="مخطط التعلم"
          srcVideo="https://youtu.be/ROjN0bSKwIc?si=-dKZc8eFv0zXHk_U"
        />
        {/* 2.2 */}
        <VideoFrontEndCorse
          titels="كورس شرح اساسيات بناء صفحات الويب-ابدمن الصفر "
          srcImage={imageFron22}
          lestname="html"
          srcVideo="https://share.google/zEwIc4RjLYjXV2lCY"
        />
        {/* 3 */}
        <VideoFrontEndCorse
          titels="في فيديو واحد فقط htmlتعليم"
          srcImage={imageFron3}
          lestname="html"
          srcVideo="https://m.youtube.com/watch?v=q3yFo-t1ykw&t=289s"
        />
        {/* 4 */}
        <VideoFrontEndCorse
          titels="HTML & CSS Crash Course"
          srcImage={imageFron4}
          lestname="html css"
          srcVideo="https://www.youtube.com/watch?v=aHzw_8wWl48"
        />
        {/* 5 */}
        <VideoCorseFrontUplod uplodesVideo={uplodesVideoFront} />
      </div>
    </>
  );
}
