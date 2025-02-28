import CardComponent from "./Components/CardComponents";
import HeaderComponent from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import FormComponent from "./Components/FormComponent";
import TopBrands from "./Components/TopBrand";
import CategoryComponents from "./Components/CategoryComponents";
import BannerSlider from "./Components/BannerSlider";
import Testimonial from "./Components/TestimonialComponent";
import OfferComponent from "./Components/OfferComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import FlagComponent from "./Components/FlagComponent";

function App() {
  return (
    <div className="App">
      {/* <FormComponent /> */}
      <HeaderComponent />
      <CategoryComponents />
      <BannerSlider />
      <TopBrands />
      <CardComponent title="Best Sellers" />
      <CardComponent title="Trending Products" />
      <OfferComponent />
      <CardComponent title="New Arrival" />
      {/* <CardComponent title="Recently Visited" /> */}
      <FlagComponent/>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
