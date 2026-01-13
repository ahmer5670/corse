import "./Contact.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Images from "./Picsart_25-10-02_23-13-48-291.png";
import ImagesIds from "./Screenshot_٢٠٢٥١٠٠٢-١٩٥٦٣٧_Samsung Internet.png";
import ImageId from "./Screenshot_٢٠٢٥١٠٠٢-١٩٥٦٤٩_Samsung Internet.png";
import ImagesId from "./Screenshot_٢٠٢٥١٠٠٢-١٩٥٦٥٩_Samsung Internet.png";
export default function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="text-input">
          <h1>
            The <span>Smart </span>
            <br />
            Choice For<span> Futuer</span>
          </h1>

          <h4>
            Elearn is a globl training proivder baded across the UK that
            specialises in accredited and bespoke{" "}
          </h4>
          <div className="itms-input-searsh">
            <SearchIcon />
            <input type="text" placeholder="Search for a location  " />

            <div className="buttom-icon">
              <Button
                variant="contained"
                disableElevation
                style={{
                  width: "28px",
                  fontSize: "10px",
                  borderRadius: "8px",
                }}
              >
                contact
              </Button>
            </div>
          </div>
        </div>
        <div className="img-images">
          <img src={Images} alt="log" />
        </div>
      </div>
      <div className="cont-don">
        <div className="desblay">
          <div>
            <img src={ImagesId} alt="eroo" />
          </div>
          <div>
            <h2>learn The Latest Skills </h2>
            <p>
              Contrary to popular belief, lorem ipsum is not simply random text.
              It has roots in a BC
            </p>
          </div>
        </div>
        <div className="desblay">
          <div>
            <img src={ImageId} alt="eroo" />
          </div>
          <div>
            <h2> Get Read For a Career</h2>
            <p>
              {" "}
              Contrary to popular belief, lorem ipsum is not simply random text.
              It has roots in a BC
            </p>
          </div>
        </div>
        <div className="desblay">
          <div>
            <img src={ImagesIds} alt="eroo" />
          </div>
          <div>
            <h2>Earn a Certificate</h2>
            <p>
              Contrary to popular belief, lorem ipsum is not simply random text.
              It has roots in a BC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
