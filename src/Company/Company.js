import Button from "@mui/material/Button";
import "./Company.css";

export default function Company() {
  function handleCallMe() {
    window.location.href = "https://wtsi.me/201279048745";
  }
  return (
    <section id="contant">
      <div className="company">
        <div className="company-blook">
          <h1
            style={{
              margin: "0 ",
              padding: "17px 0px",
              textAlign: "left",
              color: "#251e64ff",
            }}
          >
            Blook Store
          </h1>
          <p>
            Lorem ipsum is Simply dummy text of the printing and typesetting
            industry lorem ipsum has been the industry's standard dummy a type
            specimen book
          </p>
        </div>
        <div className="company-infromion">
          <h1
            style={{
              margin: "0 ",
              padding: "17px 0px",
              textAlign: "left",
              color: "#251e64ff",
            }}
          >
            Company
          </h1>
          <div style={{ textAlign: "left" }}>
            <h4>About Us</h4>
            <h4>How to work</h4>
            <h4>Populer Course</h4>
            <h4>Service</h4>
          </div>
        </div>
        {/* */}
        <div className="company-infromion">
          <h1
            style={{
              margin: "0 ",
              padding: "17px 0px",
              textAlign: "left",
              color: "#251e64ff",
            }}
          >
            Course
          </h1>
          <div style={{ textAlign: "left" }}>
            <h4>Categories</h4>
            <h4>Ofline Course</h4>
            <h4>Vidio Course</h4>
          </div>
        </div>

        <div className="company-infromion">
          <h1
            style={{
              margin: "0 ",
              padding: "17px 0px",
              textAlign: "left",
              color: "#251e64ff",
            }}
          >
            Support
          </h1>
          <div style={{ textAlign: "left" }}>
            <h4>FAQ</h4>
            <h4>Help Center</h4>
            <h4>Career</h4>
            <h4>Privacy</h4>
          </div>
        </div>

        <div className="company-infromion">
          <h1
            style={{
              margin: "0 ",
              padding: "17px 0px",
              textAlign: "left",
              color: "#251e64ff",
            }}
          >
            Contac Info
          </h1>
          <div style={{ textAlign: "left" }}>
            <h4>+201279048745</h4>
            <h4>elshameya960@gmail.com</h4>
            <h4>khorshed, Alexanider</h4>
            <Button
              style={{
                background: "blue",
                color: "whitesmoke",
                borderRadius: "10px",
              }}
              onClick={handleCallMe}
            >
              Call Me
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          Ahmed All Right Reserved,2025
        </p>
      </footer>
    </section>
  );
}
