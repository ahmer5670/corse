import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function NavberMobil({ onClose }) {
  const navigate = useNavigate();
  const goToSigin = () => {
    navigate("/signup");
  };
  return (
    <div className="navbers-contect-activ  ">
      <CloseIcon
        onClick={onClose}
        style={{
          marginRight: "-10rem",
          padding: ".1rem",
          background: "bisque",
          borderRadius: "20px",
        }}
      />
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#aboutus">
          <li>About Us</li>
        </a>
        <a href="#corser">
          <li>Courses</li>
        </a>
        <a href="#OurTarck">
          <li>Ou Server</li>
        </a>
        <a href="#contant">
          <li>Contcat Us</li>
        </a>
      </ul>
      <button
        style={{
          width: "4rem",
          padding: ".2rem",
          borderRadius: "10px",
          background: "bisque",
        }}
        onClick={goToSigin}
      >
        Sign up
      </button>
    </div>
  );
}
