import About from "../components/About";
import Carousel from "../components/Carousel";
import RunningLine from "../components/RunningLine";

const images = [
  {
    imgLarge: "../public/1.jpg",
    imgMedium: "../public/1-med.jpg",
    imgSmall: "../public/1-sm.jpg",
    title: 'Оверсайз футболка "Наша епоха 3.0"',
    price: 920,
  },
  {
    imgLarge: "../public/2.jpg",
    imgMedium: "../public/2-med.jpg",
    imgSmall: "../public/2-sm.jpg",
    title: 'Оверсайз футболка "Наша епоха 2.0"',
    price: 920,
  },
  {
    imgLarge: "../public/3.jpg",
    imgMedium: "../public/3-med.jpg",
    imgSmall: "../public/3-sm.jpg",
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
