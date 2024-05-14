import logo from "./smaash-logo.webp";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid blueGrad row mx-0">
      <div className="col-sm-3 col-12 d-flex justify-content-start align-items-start pt-3 px-3">
        <img src={logo} alt="logo" style={{ height: "50px" }} />
      </div>
      <div className="col-sm-9 col text-white mt-3 d-flex flex-column justify-content-start align-items-start px-3 gx-0">
        <h4 className="fw-bold">Smaaash Links</h4>
        <div className="row">
          <div className="col-4">
            <p className="p-0 m-0 txt-col">Home</p>
          </div>
          <div className="col-6">
            <p About className="p-0 m-0 txt-col">
              About us
            </p>
          </div>
          <div className="col-4 mt-1">
            <p className="p-0 m-0 txt-col">Contact us</p>
          </div>
          <div className="col-6 mt-1">
            <p className="p-0 m-0 txt-col">Cancellation Policy</p>
          </div>
        </div>
      </div>
      <div className="text-white mt-5">
        <p className="txt-copyright">
          All Rights Reserved © 2024 - Smaaash Entertainment Private Limited
        </p>
      </div>
    </div>
  );
}

export default Footer;
