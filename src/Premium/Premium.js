import { radioClasses } from "@mui/material";
import Image from "./Picsart_25-10-03_21-36-13-347.png";
import Images from "./Screenshot Internet.png";
import Imagese from "./ScreenshotGallery.png";
import "./Premium.css";

export default function Premium() {
  return (
    <div className="container">
      <div className="container-premium">
        <div className="imag">
          <img src={Image} alt="eroo" />
        </div>
        <div className="content">
          <h1 style={{ marginBottom: "20px", color: "rgba(36, 12, 46, 1)" }}>
            Premium<span>Learning</span>
            <br />
            Experiense
          </h1>
          <div>
            <div className="Courslab">
              <img src={Images} alt="eroo" />
              <div className="text-imag">
                <h1
                  style={{ fontSize: "1.1rem", color: "rgba(36, 12, 46, 1)" }}
                >
                  Easily Accessible
                </h1>
                <h2 style={{ fontSize: "0.9rem" }}>
                  learning will fell Very Comfortable With Courslab
                </h2>
              </div>
            </div>
            <div className="Courslab" style={{ marginTop: "18px" }}>
              <img src={Imagese} alt="eroo" />
              <div className="text-imag">
                <h1
                  style={{ fontSize: "1.1rem", color: "rgba(36, 12, 46, 1)" }}
                >
                  Easily Accessible
                </h1>
                <h2 style={{ fontSize: "0.9rem" }}>
                  learning will fell Very Comfortable With Courslab
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
