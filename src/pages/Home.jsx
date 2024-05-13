import About from "../components/About";
import Carousel from "../components/Carousel";
import RunningLine from "../components/RunningLine";

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

function Home() {
  return (
    <div>
      <Carousel images={images} />
      <RunningLine />
      <About />
    </div>
  );
}

export default Home;
