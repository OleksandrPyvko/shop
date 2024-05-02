import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import RunningLine from "./components/RunningLine";
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
    <div className="w-full h-lvg">
      <Carousel images={images} />
      <Header />
      <RunningLine />
      <About />
    </div>
  );
}

export default App;
