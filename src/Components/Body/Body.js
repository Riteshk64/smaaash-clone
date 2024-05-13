import bowling from "./bowling.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import BForm from "./BookingForm/BForm";
import Call from "./AbsIconFolder/Call";
import Play from "./AbsIconFolder/Play";
import Guidelines from "./Guidelines/Guidelines";

function Body() {
  return (
    <div className="banner">
      <img src={bowling} alt="Bowling" className="img-fluid" />
      {/*       
      <div className="banner-text fs-1">
        <p className="">Roll strikes</p>
        <p>& fun!</p>
      </div> 
      */}
      <marquee behavior="alternate" className="bouncingText pb-1">
        Catch Awesome Offers and More! | Don't Miss Out on Fantastic F&B and
        Gaming Deals!
      </marquee>
      <BForm />
      <Guidelines />
      <Play />
      <Call />
    </div>
  );
}

export default Body;
