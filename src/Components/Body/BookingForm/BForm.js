import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./BForm.css";

function BForm() {
  const [todayDate, setTodayDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setTodayDate(formattedDate);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-3">
      <div className="mb-2">
        <h1 className="text-white">Book your slot</h1>
      </div>
      <div className="d-flex flex-column">
        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <select
              class="form-select formClass"
              aria-label="Default select example"
            >
              <option selected>Mumbai - Utopia, Lower Parel</option>
              <option>Hyderbad - Inorbit Mall</option>
              <option>Hyderbad - Nexus Mall</option>
              <option>Dwarka - Radisson Blu</option>
              <option>Gurugram - Airia Mall</option>
              <option>Noida - DLF Mall of India</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              class="bi bi-calendar"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <input
              type="date"
              className="form-control formClass"
              value={todayDate}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <select
              class="form-select formClass"
              aria-label="Default select example"
            >
              <option disabled selected>
                No. of Adults
              </option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <select
              class="form-select formClass"
              aria-label="Default select example"
            >
              <option disabled selected>
                No. of Children
              </option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              class="bi bi-joystick"
              viewBox="0 0 16 16"
            >
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <select
              class="form-select formClass"
              aria-label="Default select example"
            >
              <option disabled selected>
                No. of Games
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-2 d-flex justify-content-center align-items-center p-0 iconClass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
          </div>
          <div className="col d-flex justify-content-center align-items-center ps-1">
            <select
              class="form-select formClass"
              aria-label="Default select example"
            >
              <option disabled selected>
                Time slot
              </option>
              <option>12:00</option>
              <option>2:00</option>
              <option>4:00</option>
              <option>6:00</option>
              <option>8:00</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-1 d-flex flex-column justify-content-center align-items-center">
        <div className="form-check">
          <input
            className="form-check-input me-2 bg-dark"
            type="checkbox"
            id="student"
            name="student"
            value="1"
          />
          <label className="text-white"> Are you a student?</label>
        </div>
        <p className="text-white" style={{ width: "190px" }}>
          Click here to avail student discount.
        </p>
      </div>

      <div className="container-xs mb-4">
        <div className="row justify-content-between">
          <div className="col-9 d-flex align-items-center">
            <p className="text-white m-0">Subtotal value</p>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-start">
            <p className="text-white m-0">0.00</p>
          </div>
        </div>
        <div className="row justify-content-between fw-bold">
          <div className="col-9 d-flex align-items-center">
            <p className="text-white m-0">Total value</p>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-start">
            <p className="text-white m-0">0.00</p>
          </div>
        </div>
      </div>

      <button className="btn rounded-pill text-white fw-bold redColor py-2 px-3">
        Add to cart
      </button>
    </div>
  );
}

export default BForm;
