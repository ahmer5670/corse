import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// ملفات
import VideoCommoent from "./VideoComnet";
import Uplodcorser from "./Uplodcorse";
import VideoCommoet from "./VideoCommentUplode";

// icon
import Download from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import AccessTime from "@mui/icons-material/AccessTime";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
//
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcdon from "@mui/icons-material/Mic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// image
import uxUlone from "./image/uI 1.jpeg";
import uxUltow from "./image/ux ul 1.jpeg";
import uxUlthri from "./image/hq720 (1).jpg";
import uxUlt4 from "./image/ux ui 4.jpeg";
import uxUlt5 from "./image/images (1).jpeg";
import uxUlt6 from "./image/ux ui 6.jpeg";
import uxUlt7 from "./image/images.jpeg";
import uxUlt8 from "./image/ux ui 8.jpeg";
import uxUlt9 from "./image/ux ui 9.jpeg";
import uxUlt99 from "./image/ux ui 9.9.jpeg";
import uxUlt98 from "./image/ux ui 9.8.jpeg";

import uxUlt10 from "./image/ux ui 10.jpeg";
import uxUlt11 from "./image/ux ui 11.jpeg";
import uxUlt12 from "./image/ux ui 12.jpeg";
import uxUlt13 from "./image/ux ui 13.jpeg";
import uxUlt14 from "./image/ux ui 14.jpeg";
import uxUlt15 from "./image/ux ui 15.jpeg";

import React from "react";
export default function Design() {
  const navigate = useNavigate(); // ✅ لازم تكون جوه الفنكشن

  const [search, setSearch] = useState("");
  const [showBoxUplode, setShowBoxUplod] = useState(false);
  const [uplodesVideo, setUplodesVideo] = useState([]);

  const goHome = () => {
    navigate("/");
  };
  // OpenUplodVideo
  const handleOpenUplodeVideo = () => {
    setShowBoxUplod(true);
  };
  const handleCloseUplodeVideo = () => {
    setShowBoxUplod(false);
  };
  // ===OpenUplodVideo

  const addVideo = (newVideo) => {
    setUplodesVideo((prev) => [...prev, newVideo]);
  };
  return (
    <>
      <div className="nav-ber">
        <MenuIcon style={{ marginLeft: "1rem", marginRight: "2rem" }} />
        <div className="nameh1-nabr">
          <h1>Course UL/UX</h1>
        </div>
        <div className="navbers-contect">
          <div style={{ marginLeft: "-3rem", marginTop: "-1.2rem" }}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
      {/* UplodVideo */}
      {showBoxUplode && (
        <Uplodcorser
          setUplodesVideo={addVideo}
          onClose={handleCloseUplodeVideo}
        />
      )}
      {/* chacbocx menu */}
      <div></div>
      {/* secone video */}
      <div className="all-corse">
        {/* 1 */}
        <VideoCommoent
          titels="UX UI  Design : Toutes Les basses pour bien demarrer (guide complet)"
          srcImage={uxUlone}
          srcVideo="https://youtu.be/RqCJRrseD1k?si=Jc94PE6sIEc3EAFL"
        />

        {/* 2 */}
        <VideoCommoent
          titels="Should You do UX UL Design career together or sepetate,Both UX Design "
          srcImage={uxUltow}
          srcVideo="https://youtu.be/al4MP-ulgbg?si=D5deMXDX3TXrzITa"
        />

        {/* 3 */}
        <VideoCommoent
          srcImage={uxUlthri}
          titels="UX UX Desidn Beginners Tutorial in Tamil"
          srcVideo="https://youtu.be/TJtEQ1p1hw4?si=Tdcm16luHFBTGInu"
        />

        {/* 4 */}
        <VideoCommoent
          titels="What Is UI/UX Design"
          srcImage={uxUlt4}
          srcVideo="https://youtu.be/6itkXaoJafU?si=0wF7lYEevG_qzDYB"
        />
        {/* 5 */}
        <VideoCommoent
          srcImage={uxUlt5}
          titels="UI UX Design Full course "
          srcVideo="https://youtu.be/2eWdccBjZNs?si=8dkkxIAcPfB3JICl"
        />

        {/* 6 */}
        {/* <VideoCommoent srcImage={uxUlt6} titels="" /> */}

        {/* 7 */}
        <VideoCommoent
          srcImage={uxUlt7}
          titels="7 Days UL UX App Design"
          srcVideo="https://youtu.be/h3SWdhoddHQ?si=SyuVVV2M9H-bg_rw"
        />

        {/* 8 */}
        <VideoCommoent
          titels="UX Research VS UX Design Konw the difference"
          srcImage={uxUlt8}
          srcVideo="https://youtu.be/wQD4hoIKAGU?si=j3EhMivPLsa-drOv"
        />

        {/* 9 */}
        <VideoCommoent
          titels="The Ux Design Process For Beginners (The 5 key Stages) "
          srcImage={uxUlt9}
          srcVideo="https://youtu.be/XhPQbUsD9c0?si=jcB5MIL_8iT-jp-5"
        />
        <VideoCommoent
          titels="UX Design vs UI Design - what's The Differnce"
          srcImage={uxUlt99}
          srcVideo="https://youtu.be/5CxXhyhT6Fc?si=jaTMVT3ENS3K3u1s"
        />
        <VideoCommoent
          titels="What Is UX Design?-An Introduction (Full Guide For 2024)"
          srcImage={uxUlt98}
          srcVideo="https://youtu.be/ziQEqGZB8GE?si=UoTaPCqkmu87R82_"
        />

        {/* 10 */}
        <VideoCommoent
          srcImage={uxUlt10}
          srcVideo="https://www.youtube.com/live/FLBGBv278Tg?si=RodMpIMz1t90Uopi"
          titels="UX/UL Desing:A LIVE Q&A With Senior"
        />
        {/* 11 */}
        <VideoCommoent
          srcImage={uxUlt11}
          titels="Free Live to INTRO UX Design Cours"
          srcVideo="https://www.youtube.com/live/f0F4QDDX1Ac?si=Rj0SPf9zG638b4cc"
        />

        {/* 12 */}
        <VideoCommoent
          titels="THE UX/UX Crach Course for 2023"
          srcImage={uxUlt12}
          srcVideo=" https://share.google/rd5l4kQODsTh1cOIj"
        />
        {/* 13 */}
        <VideoCommoent
          titels="UL UX Full Course 2025"
          srcImage={uxUlt13}
          srcVideo="https://www.youtube.com/live/AWPF29J0Yfk?si=xAUK1o1Z-OObWeIH"
        />
        {/* 14 */}
        <VideoCommoent
          titels="The 2025 UX UI Crash Course for Beginners"
          srcImage={uxUlt14}
          srcVideo=" https://share.google/JYiqqciRfXWgWdqKu"
        />
        {/* 15 */}
        <VideoCommoent
          titels="2024 UX UI Design Cash Coures im Figma "
          srcImage={uxUlt15}
          srcVideo="https://youtu.be/dYtdv--qd_U?si=_hOohxM3Ytk7Jv4E"
        />
        {/* 16 */}
        <VideoCommoet uplodesVideo={uplodesVideo} />
      </div>
    </>
  );
}
