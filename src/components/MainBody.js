import "../css/MainBody.css";
import awardTakeImage from "../asserts/2.png";
import awardImage from "../asserts/1.png";
import productsImage from "../asserts/3.png";

const MainBody = () => {
  return (
    <div className="main-body-container merriweather-regular">
      <div className="main-body-first-container">
        <div className="main-body-right-container">
          <p className="text-center font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="main-body-container-list-container">
            <li className="list-item-each-point">
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li className="list-item-each-point">
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div className="main-body-right-image-container">
            <img
              src={awardTakeImage}
              alt="right_image"
              className="right-image"
            />
            <p className="text-center">
              Government of India has awarded the{" "}
              <span className="font-bold">
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="main-body-left-image-container">
          <img src={awardImage} alt="award_image" className="left-image" />
        </div>
      </div>
      <div className="main-body-second-container">
        <p className="text-center">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="main-body-second-container-image-container">
          <img
            src={productsImage}
            alt="products"
            className="main-body-second-container-image"
          />
        </div>
        <p className="text-center">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="main-body-third-container">
        <p className="text-center font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="text-center">
          CHEMICALS & PROCESS <span className="red-color">|</span>POWER{" "}
          <span className="red-color">|</span> WATER & WASTE WATER{" "}
          <span className="red-color">|</span> OILS & GAS{" "}
          <span className="red-color">|</span> PHARMA{" "}
          <span className="red-color">|</span> SUGARS & DISTILLERIES
          <span className="red-color">|</span> PAPER & PULP{" "}
          <span className="red-color">|</span>MARINE & DEFENCE
          <span className="red-color">|</span>
          METAL & MINING<span className="red-color">|</span> FOOD & BEVERAGE
          PETROCHEMICAL & REFINERIES<span className="red-color">|</span> SOLAR
          <span className="red-color">|</span>
          BUILDING <span className="red-color">|</span>HVAC
          <span className="red-color">|</span> FIRE FIGHTING
          <span className="red-color">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </div>
  );
};

export default MainBody;
