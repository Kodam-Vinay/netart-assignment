import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import "../css/Body.css";

const Body = () => {
  return (
    <div className="body-container linear-gradient">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Body;
