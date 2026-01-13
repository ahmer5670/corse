import "./Coment.css";
import Profile from "./profile1.jpeg";
import Profilese from "./profile2.jpeg";
import Profiles from "./profile3.jpeg";
export default function Coment() {
  return (
    <div id="aboutus">
      <div>
        <h1>What Student's say </h1>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          Lorem ipsum is dummy text of the printing
        </p>
        <div className="containe">
          <div className="conten">
            <div>
              <p>
                " Teachinges of the great explore of truth the master-builder of
                human happiness on one rejects, dislikes, or avoids pleasure
                itself, pleasure itself"
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Profile}
                alt="logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div>
                <h1 style={{ fontSize: "1rem", marginLeft: "0" }}>
                  finlay kirk
                </h1>
                <p style={{ fontSize: "0.8rem", marginLeft: "4px" }}>
                  Mobel Application
                </p>
              </div>
            </div>
          </div>
          {/*////// */}
          <div className="conten">
            <div>
              <p>
                " Complete acciunt of the system and expound the actual Contrary
                to popular belief,lorem ipsum is not simply random text.it has
                roots"
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Profilese}
                alt="logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div>
                <h1 style={{ fontSize: "0.7rem", marginLeft: "0" }}>
                  Dannette P. Cervantes
                </h1>
                <p style={{ fontSize: "0.8rem", marginLeft: "4px" }}>
                  Web Developper
                </p>
              </div>
            </div>
          </div>
          {/*/////// */}
          <div className="conten">
            <div>
              <p style={{ marginBottom: "20px", textAlign: "justify" }}>
                "there are many variations of passages of lorem ipsum available,
                but the majority have suffered altertion in dome from by
                injected humour"
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Profiles}
                alt="logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div>
                <h1 style={{ fontSize: "1rem", marginLeft: "0" }}>
                  Clare R.Altman
                </h1>
                <p style={{ fontSize: "0.8rem", marginLeft: "4px" }}>
                  Full stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
