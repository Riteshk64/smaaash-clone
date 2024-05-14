import "./Guidelines.css";
function Guidelines() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white bg-color mt-4">
      <h2 className="fw-bold">Guidelines for booking online</h2>
      <div className="container-lg rounded bg-gd-color border border-white rounded-5">
        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <h5 className="mb-1 fs-5">1.Check Availability</h5>
          <p className="fw-lighter fs-6">
            Ensure your chosen date and time are available
          </p>
        </div>

        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <h5 className="mb-1 fs-5">2.Customize & Confirm</h5>
          <p className="fw-lighter fs-6">
            Add any extras, review your booking, and proceed to secure payment
          </p>
        </div>

        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <h5 className="mb-1 fs-5">3.Confirmation Email</h5>
          <p className="fw-lighter fs-6">
            Receive a confirmation email with all details.
          </p>
        </div>

        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <h5 className="mb-1 fs-5">4.Arrive Promptly</h5>
          <p className="fw-lighter fs-6">Be on time for your gaming session.</p>
        </div>

        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <h5 className="mb-1 fs-5">5.Enjoy the Experience</h5>
          <p className="fw-lighter fs-6">Have a great time!</p>
        </div>

        <div className="d-flex flex-column justify-content-start align-items-center col-12 px-4 my-1 text-center">
          <p className="fw-lighter fs-6">Thank you for booking with us!</p>
        </div>
      </div>
    </div>
  );
}

export default Guidelines;
