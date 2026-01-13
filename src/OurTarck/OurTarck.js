import "./OurTarc.css";
import Image from "./user-2.jpg";
import Imageses from "./user-3.jpg";
import Imagesesy from "./user-4.jpg";
import Imaages from "./profile4.png";

export default function OurTarck() {
  return (
    <div id="OurTarck" className="our-tarck">
      <h1 style={{ marginTop: "70px" }}> Our Tarck</h1>
      <h4 style={{ marginBottom: "50px", color: "#b3b3b3ff" }}>
        Lorem ipsum is dummy text of the popular
      </h4>
      <div className="our-tarck-box">
        <div className="box-shado">
          <img className="imag-ourt" src={Image} alt="eroo" />
          <div>
            <h1 className="text-our">Matthew E.McNatt</h1>
            <h4 style={{ fontSize: "1.1rem", textAlign: "left" }}>
              Profess @George Brown College
            </h4>
            <p>
              UI enim ad minim veniam, quis nost exercitationullamco labotis
              nisi ut allquip ex commodo
            </p>
            <h3>Engineering physics</h3>
          </div>
        </div>
        {/* */}
        <div className="box-shado">
          <img src={Imageses} alt="eroo" className="imag-ourt" />
          <h1 className="text-our">Tracy .right</h1>
          <h4 style={{ fontSize: "1.1rem" }}> Profess @George Brown College</h4>
          <p>
            UI enim ad minim veniam, quis nost exercitationullamco labotis nisi
            ut allquip ex commodo
          </p>
          <h3>Engineering physics</h3>
        </div>
        {/* */}
        <div className="box-shado">
          <img src={Imagesesy} alt="eroo" className="imag-ourt" />
          <h1 className="text-our">Nicol</h1>
          <h4 style={{ fontSize: "1.1rem" }}> Profess @George Brown College</h4>
          <p>
            Front End the creat and implementation of vivible and intractive
            aspects of an application
          </p>
          <h3>Engineering physics</h3>
        </div>
      </div>
      <div className="imag-ourt">
        <img src={Imaages} alt="eroo" />
      </div>
    </div>
  );
}
