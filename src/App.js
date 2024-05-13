import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App d-flex justify-content-center bg-black">
      <div style={{ maxWidth: "600px" }}>
        <div className="container-wrapper">
          <div className="container-fluid px-0">
            <Navbar />
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
