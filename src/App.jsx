import Carousel from "./components/Carousel";
const images = [
  "../../public/1.jpg",
  "../../public/2.jpg",
  "../../public/3.jpg",
];
function App() {
  return <Carousel images={images} />;
}

export default App;
