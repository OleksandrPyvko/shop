import { MenuProvider } from "./context/MenuContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ItemDetails from "./pages/ItemDetails";
import AdminPage from "./pages/AdminPage";
import Test from "./pages/Test";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-full h-lvg ">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MenuProvider>
            <CartProvider>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="catalog" element={<Catalog />} />
                  <Route path="delivery" element={<Delivery />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="about-us" element={<AboutUs />} />
                  <Route path="/item/:id" element={<ItemDetails />} />
                  <Route path="/admin-tools" element={<AdminPage />} />
                  <Route path="/test" element={<Test />} />
                </Route>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<SignUp />}/>

                {/* <Header />
      
      <Menu />
      <Footer /> */}
              </Routes>
            </CartProvider>
          </MenuProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
