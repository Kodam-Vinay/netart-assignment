import "../css/Footer.css";
import Facebook from "../svgs/Facebook";
import Phone from "../svgs/Phone";
import Website from "../svgs/Website";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="each-footer-container">
        <Phone />
        <p className="each-footer-text">
          Toll free <span className="font-bold">1800 200 1234</span>
        </p>
      </div>
      <div className="each-footer-container">
        <Facebook />
        <a
          href="www.facebook.com/cripumps"
          target="_blank"
          className="each-footer-text"
        >
          www.facebook.com/cripumps
        </a>
      </div>
      <div className="each-footer-container">
        <Website />
        <a
          href="www.crigroups.com"
          target="_blank"
          className="each-footer-text"
        >
          www.crigroups.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
