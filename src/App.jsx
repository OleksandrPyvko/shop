import { MenuProvider } from "./context/MenuContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";

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
