import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function AppLayout() {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
