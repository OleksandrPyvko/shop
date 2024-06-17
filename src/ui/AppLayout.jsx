import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuCatalog from "../components/MenuCatalog";
import Cart from "../components/Cart";
import AdminPage from "../components/AdminPage";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Menu />
      {/* <Cart /> */}
      <MenuCatalog />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
