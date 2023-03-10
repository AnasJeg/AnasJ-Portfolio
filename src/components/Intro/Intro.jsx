import React, { useContext } from "react";
import "./Intro.css";
import Bg1 from "../../img/bg1.png";
import Bg2 from "../../img/bg2.png";
import boy from "../../img/mee.png";
import thumbup from "../../img/deskdev.png";
import thumweb from "../../img/webdev.png";
import thumMob from "../../img/mobdev.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>I am</span>
          <span>Anas JEGOUAL</span>
          <span>
             Software Engineering Student.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/AnasJeg" target="_blank" rel="noreferrer">
          <img src={Github} alt=""/>
          </a>
         
          <a href="https://www.linkedin.com/in/anasjegoual/" target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="" />
          </a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Bg1} alt="" />
        <img src={Bg2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.div
          initial={{ top: "-4%", left: "64%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Desktop" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumMob} text1="Mobile" text2="Developer" />
        </motion.div>
      {/* animation */}
      <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumweb} text1="Web" text2="Developer" />
        </motion.div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
