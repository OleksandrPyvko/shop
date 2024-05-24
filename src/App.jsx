import { MenuProvider } from "./context/MenuContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="w-full h-lvg ">
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="about-us" element={<AboutUs />} />
            </Route>

            {/* <Header />
      
      <Menu />
    <Footer /> */}
          </Routes>
        </MenuProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
