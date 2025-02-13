import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const App: React.FC = () => {
  return (
    <div>
      <div id="stars"></div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
