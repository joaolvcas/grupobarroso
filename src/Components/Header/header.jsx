import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import LogoBranca from "../../../src/assets/logobarrosobranca.jpg";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";

import MDFS from '../../assets/2.jpg'
import Youtube from '../../assets/3.jpg'
import Institucional from '../../assets/4.jpg'
import Portas from '../../assets/5.jpg'
import Maquina from '../../assets/6.jpg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <img src={LogoBranca} alt="Logo Barroso" className="Logo" />

        <FiMenu
          size={35}
          className="Menu"
         onClick={() => setMenuOpen(true)}
        />
      </div>

      <div
        className={`menuOverlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`menuDrawer ${menuOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <h3>Departamentos</h3>
          <FiX size={28} onClick={() => setMenuOpen(false)} />
        </div>

        <div className="drawerContent">

          <div className="menuCard" onClick={() => goTo("/")}>
            <img src={MDFS} className="IconImage" />
            <span>Catálogo</span>
          </div>

          <div className="menuCard" onClick={() => goTo("/portas")}>
            <img src={Portas} className="IconImage" />
            <span>Portas</span>
          </div>

          <div className="menuCard" onClick={() =>
    window.open("https://youtube.com/@grupobarroso?si=21pDoETU5pK0gxjM", "_blank")
  }>
             <img src={Youtube} className="IconImage" />
            <span>Nosso Canal</span>
          <FiExternalLink
          size={15}
        />
          </div>


        </div>
      </div>
    </>
  );
}

export default Header;