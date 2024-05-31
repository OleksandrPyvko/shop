import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuCatalog from "../components/MenuCatalog";

function AppLayout() {
  return (
    <div>
      <Header />
      <Menu />
      <MenuCatalog />
      <Outlet  />
      <Footer />
    </div>
  );
}

export default AppLayout;
