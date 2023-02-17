import React, { useContext } from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";

const Footer = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
     
      <div className="f-content">
         <p style={{ color: darkMode ? "white" : "" }} > Copyright &copy; 2023 </p>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>  
      
    </div>
  );
};

export default Footer;
