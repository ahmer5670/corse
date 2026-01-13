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

// copmnt
import UplodVideoBack from "./uplodVideoBack";
import VideoBackEndCorse from "./videoCorseBack";
import VideoBackEndCorseUplod from "./videoCorseBackUplod";

// image
import imageBack1 from "./imageBack/images (1).jpg";
import imageBack2 from "./imageBack/images (2).jpeg";
import imageBack3 from "./imageBack/images (3).jpeg";
import imageBack4 from "./imageBack/images (4).jpeg";
import imageBack5 from "./imageBack/images (5).jpeg";
import imageBack6 from "./imageBack/images (6).jpeg";
import imageBack7 from "./imageBack/images (7).jpeg";
import imageBack8 from "./imageBack/images (8).jpeg";
import imageBack9 from "./imageBack/images (12).jpeg";
import imageBack10 from "./imageBack/images (9) (7).jpeg";
import imageBack11 from "./imageBack/images (9) (5).jpeg";
import imageBack12 from "./imageBack/images (16).jpeg";
import imageBack13 from "./imageBack/images (11).jpg";
import imageBack14 from "./imageBack/images (15).jpeg";
import imageBack15 from "./imageBack/images (9) (4).jpeg";
import imageBack16 from "./imageBack/images (9) (6).jpeg";
import imageBack17 from "./imageBack/images (9) (2).jpeg";
import imageBack18 from "./imageBack/images (9) (3).jpeg";
import imageBack19 from "./imageBack/images (13).jpeg";
import imageBack20 from "./imageBack/images (18).jpeg";

import { Image } from "@mui/icons-material";

export default function BackEnd() {
  const navigate = useNavigate();

  const [openUplodFront, setOpenUplodFront] = useState(false);
  //   دي بتعت اضافه الفديو من المستخدم
  const [uplodesVideoBack, setUplodesVideoBack] = useState([]);

  const goHome = () => {
    navigate("/");
  };

  const handleOpenUplodeVideo = () => {
    setOpenUplodFront(true);
  };
  const handleCloseUplodeVideo = () => {
    setOpenUplodFront(false);
  };

  const addVideo = (newVideo) => {
    setUplodesVideoBack((prev) => [...prev, newVideo]);
  };
  return (
    <>
      <div className="nav-ber">
        <MenuIcon style={{ marginLeft: "1rem", marginRight: "2rem" }} />
        <div className="nameh1-nabr">
          <h1>BackEnd</h1>
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
      {openUplodFront && (
        <UplodVideoBack
          setUplodesVideo={addVideo}
          onClose={handleCloseUplodeVideo}
        />
      )}

      <div className="all-corse">
        {/* 1 */}
        <VideoBackEndCorse
          titels="Backend Developer Roadmap"
          srcImage={imageBack1}
          lastname="Back"
          srcVideo="https://youtu.be/CVgzp2vfePs?si=BSjOersBqHjzrPDW"
        />

        {/* 2 */}
        <VideoBackEndCorse
          titels="PHP Laravel vs Node.js"
          srcImage={imageBack2}
          lastname="PHP"
          srcVideo="https://youtu.be/QuSTVNN0ZLM?si=keyPvfPD47zXlO_5"
        />
        {/* 3 */}
        <VideoBackEndCorse
          titels="في 3 ساعات|شرح نظري و اعملي node.js كورس"
          srcImage={imageBack3}
          lastname="Node.js"
          srcVideo="https://www.youtube.com/watch?v=LG7ff9TVWjM"
        />
        {/* 4 */}
        <VideoBackEndCorse
          titels="node.js express full course project"
          srcImage={imageBack4}
          lastname="Node.js"
          srcVideo="https://www.youtube.com/watch?v=vvD5h7yLi1g"
        />
        {/* 5 */}
        <VideoBackEndCorse
          titels="Backend Developer Tools-ادوات الباك اند"
          srcImage={imageBack5}
          lastname="الادوات"
          srcVideo="https://share.google/cptHRpPRDOD7DIe4v"
        />
        {/* 6 */}
        <VideoBackEndCorse
          titels="node.js intro Node.js منحه ITI"
          srcImage={imageBack6}
          lastname="node.js"
          srcVideo="https://youtu.be/9YsRGpY2q_s?si=Ulusbn4A6ssjehOH"
        />
        {/* 7 */}
        <VideoBackEndCorse
          titels="والاستخدام وميزات نود جي اس الدراس الاولnode.jsشرح ما هو "
          srcImage={imageBack8}
          lastname="node.js"
          srcVideo="https://youtu.be/6QGHmc4gGBA?si=u6O5xyWfNUa1vzqM"
        />
        {/* 8 */}
        <VideoBackEndCorse
          titels="تحميل وتنصيب نود جي اس علي كمبيوتر+طريقه انشاء تطبيقات"
          srcImage={imageBack9}
          lastname="node.js"
          srcVideo="https://youtu.be/mM_eLbLaC7s?si=xCmXT7fHfTBTo4LX"
        />
        {/* 9 */}
        <VideoBackEndCorse
          titels="React.jsوانشاء تطبيقات الويب ب npm npxطريقه استخدام "
          srcImage={imageBack10}
          lastname="node.js"
          srcVideo="https://youtu.be/XGZ0Mk4UWCk?si=9TDe9yomIzyuLZV-"
        />
        {/* 10 */}
        <VideoBackEndCorse
          titels="nod.js طريقه قراءة او التحديث او انشاء ملفات | كورس "
          srcImage={imageBack7}
          lastname="node.js"
          srcVideo="https://youtu.be/P8LJPrgnlow?si=kwE2tEnTo1JaG9Sz"
        />

        {/* 11 */}
        <VideoBackEndCorse
          titels="node.js طريقه حذف ملفات ومجلدات | كورس تعلم "
          srcImage={imageBack11}
          lastname="node.js"
          srcVideo="https://youtu.be/Wxp_Ve3cdQ4?si=afCH9CfjXMPFC8dZ"
        />
        {/* 12 */}
        <VideoBackEndCorse
          titels="وكيفه توجيه الصفحات StatusCode شرح  Node.js فيRoutingشرح "
          srcImage={imageBack12}
          lastname="node.js"
          srcVideo="https://youtu.be/mtF1aTRwFvM?si=f-9LKMKCVRmierEZ"
        />
        {/* 13 */}
        <VideoBackEndCorse
          titels="و كيفيه اضافه الي مشروعك express شرح ما هو "
          srcImage={imageBack13}
          lastname="node.js"
          srcVideo="https://youtu.be/aqYp_7HEREY?si=H-Qs0pqP967JiLPt"
        />
        {/* 14 */}
        <VideoBackEndCorse
          titels="POST,PUT,DELETE,GET و الفرق بين  HTTP Rrquest Methodsشرح    "
          srcImage={imageBack14}
          lastname="node.js"
          srcVideo="https://youtu.be/RaiaP1J2wLg?si=MVuYA2YuL4hBjOpZ"
        />
        {/* 15 */}
        <VideoBackEndCorse
          titels="وكيفيه عمل تطبيق ويب متعدد الصفحات node.js Routingشرح "
          srcImage={imageBack15}
          lastname="node.js"
          srcVideo="https://youtu.be/q_ex-eAB_5U?si=YG3NrTaZEm7PxprN"
        />
        {/* 16 */}
        <VideoBackEndCorse
          titels="او fych, ajax html form  كيفه ارسال واستقبال البيانات باستخدام "
          srcImage={imageBack16}
          lastname="node.js"
          srcVideo="https://youtu.be/hsF5WkooYts?si=E3vdPtNlz2YfgSYk"
        />
        {/* 17 */}
        <VideoBackEndCorse
          titels="node.js intro Node.js منحه ITI"
          srcImage={imageBack17}
          lastname="node.js"
          srcVideo="https://youtu.be/jGlcDC-30ks?si=DKC_H5qBq5AxIz3I"
        />
        {/* 18 */}
        <VideoBackEndCorse
          titels="node.js intro Node.js منحه ITI"
          srcImage={imageBack18}
          lastname="node.js"
          srcVideo="https://youtu.be/_aNuBcEOMkI?si=fi6K5UppSOPxRhQZ"
        />
        {/* 19 */}
        <VideoBackEndCorse
          titels="كورس اكسبرس في ساعه واحده"
          srcImage={imageBack19}
          lastname="Express"
          srcVideo="https://youtu.be/rJrosZvSJzk?si=vO9q5dfSCqkdekbA"
        />
        {/* 20 */}
        <VideoBackEndCorse
          titels="كورس كامل في ساعه ونص "
          srcImage={imageBack20}
          lastname="node.js"
          srcVideo="https://youtu.be/12z1zCFxrIo?si=DaAbFMEDJ3R1k2T_"
        />
        {/* 21 */}
        <VideoBackEndCorseUplod uplodesVideo={uplodesVideoBack} />
      </div>
    </>
  );
}
