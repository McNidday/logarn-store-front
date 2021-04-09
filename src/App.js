import TopNavigation from "./components/top_navigation/TopNavigation"
import FeaturedSlider from "./components/feature_slider/FeaturedSlider"
import './css/Layout.css'
import '../node_modules/normalize.css/normalize.css'
import ProductCardList from "./components/product_card/ProductCardList"
import ProductModal from "./components/product_modal/ProductModal"

// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <TopNavigation></TopNavigation>
      <FeaturedSlider></FeaturedSlider>
      <ProductCardList></ProductCardList>
      <ProductModal></ProductModal>
    </div>
  );
}

export default App;
