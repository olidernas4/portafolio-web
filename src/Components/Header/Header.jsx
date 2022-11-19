import "./Header.css";
import { RiReactjsLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <RiReactjsLine className="logo" />
       Andres Olider Narvaez Espejo
      </h1>

      <div className="nav">
        <h3>pagina principal</h3>
        <h3>Services</h3>
        
        
      </div>

      <div className="header-right"></div>
    </div>
  );
};

export default Header;
