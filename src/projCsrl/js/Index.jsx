import Navbar from "./csrlNav";
import Carousel from "./Carousel.jsx";
import About from "./About.jsx";
import Bodyf from "./Bodyf.jsx";
import Bodys from "./Bodys.jsx";
import Bodyt from "./Bodyt.jsx";
import Slider from "./Slider.jsx";
import Footer from "./Footer.jsx";
// import Slide from "./Slide.jsx";
// import { SliderData } from "./SliderData.jsx";
import { SliderData } from "./SliderDatasup.jsx";
function Index() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Bodyf />
      <Bodys />
      <Bodyt slides={SliderData} />
      <Footer />
      <Slider images={SliderData} />
    </>
  );
}

export default Index;
