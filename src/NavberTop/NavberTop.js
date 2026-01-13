import MenuIcon from "@mui/icons-material/Menu";

import "./NavberTop.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavberMobil from "./NavberMobil";

export default function NavbersTop() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const goToSigin = () => {
    navigate("/signup");
  };
  function handleOpenMenu() {
    setOpenMenu(true);
  }
  function handleCloseMenu() {
    setOpenMenu(false);
  }
  return (
    <div className="nav-ber">
      <div className="nameh1">
        <h1>Ahmed</h1>
      </div>
      <div className="meunIcon-nav-bar">
        <MenuIcon onClick={handleOpenMenu} />
      </div>

      <div className="navbers-contect ">
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
        <button onClick={goToSigin}>Sign up</button>
      </div>
      {openMenu && <NavberMobil onClose={handleCloseMenu} />}
    </div>
  );
}
