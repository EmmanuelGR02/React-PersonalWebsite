import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div id="welcome-page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="parallax">
        <div className="layer" data-depth="0.6">
          <div className="some-space">
            <h1>Welcome! Thanks for visiting my website.</h1>
          </div>
        </div>

        <div className="layer" data-depth="0.4">
          <div id="particles-js"></div>
        </div>

        <div className="buttonDiv">
          <div id="third" className="buttonBox">
            <button className="welcomeButton" onClick={() => navigate("/home")}>Continue to website</button>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
