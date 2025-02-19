import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome-container">
        <div className="background-animation"></div>
        <div className="content">
          <h1 className="title">Welcome</h1>
          <p>Thanks for visiting.</p>
          <button onClick={() => navigate("/home")}>Enter</button>
        </div>
      </div>
    </>
  );
}
