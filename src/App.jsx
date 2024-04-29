import Carousel from "./components/Carousel";
import Header from "./components/Header";
const images = [
  {
    img: "../public/1.jpg",
    title: 'ZOHO оверсайз футболка "Наша епоха 3.0"',
    price: 920,
  },
  {
    img: "../public/2.jpg",
    title: 'ZOHO оверсайз футболка "Наша епоха 2.0"',
    price: 920,
  },
  {
    img: "../public/3.jpg",
    title: 'ZOHO костюм "GOD EST ETERNITY"',
    price: 1620,
  },
];
function App() {
  return (
    <div className="w-full h-lvg">
      <Carousel images={images} />
      <Header />
    </div>
  );
}

export default App;
