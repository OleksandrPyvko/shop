import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RunningLine from "./components/RunningLine";
import Menu from "./components/Menu";
import { MenuProvider } from "./context/MenuContext";

const images = [
  {
    img: "../public/1.jpg",
    title: 'Оверсайз футболка "Наша епоха 3.0"',
    price: 920,
  },
  {
    img: "../public/2.jpg",
    title: 'Оверсайз футболка "Наша епоха 2.0"',
    price: 920,
  },
  {
    img: "../public/3.jpg",
    title: 'Костюм "GOD EST ETERNITY"',
    price: 1620,
  },
];
function App() {
  return (
    <div className="w-full h-lvg ">
      <MenuProvider>
      <Carousel images={images} />
      <Header />
      <RunningLine />
      <About />
      <Menu />
      <Footer />
      </MenuProvider>
    </div>
  );
}

export default App;
