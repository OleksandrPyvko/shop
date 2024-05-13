import { MenuProvider } from "./context/MenuContext";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="w-full h-lvg ">
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
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
