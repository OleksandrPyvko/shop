import { Outlet } from "react-router-dom";
import { MenuProvider } from "../context/MenuContext";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

function AppLayout() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
