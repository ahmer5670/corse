import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";

export default function Uplodcorser({ onClose, setUplodesVideo }) {
  const [imag, setImag] = useState(null);
  const [name, setName] = useState("");
  const [srcVideo, setSrcVideo] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImag(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name, imag, srcVideo };
    // setUplodesVideo((prev) => [...prev, newItem]);
    setUplodesVideo(newItem);

    setImag(null);
    setName("");
    setSrcVideo("");
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "120vh",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          border: "none",
          zIndex: "999",
        }}
      >
        <div
          className="box-uplod-corse"
          style={{ width: "50%", height: "50%", border: "1px solid black" }}
        >
          <form>
            <div
              style={{
                width: "7rem",
                background: "rgba(255, 238, 255, 1)",
                height: "7rem",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                borderRadius: "50%",
                marginTop: "10px",
                marginBottom: "1.2rem",
                marginLeft: "5rem",
              }}
            >
              <ArrowUpwardIcon style={{ fontSize: "5rem" }} />
              <br />
              <label style={{ alignItems: "center", textAlign: "center" }}>
                imag:
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <label>title</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>src video</label>
            <input
              value={srcVideo}
              onChange={(e) => setSrcVideo(e.target.value)}
            />
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </form>
          <CloseIcon
            style={{
              position: "absolute",
              top: "-0.5rem",
              right: "-1.8rem",
              fontSize: "2rem",
            }}
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
}
