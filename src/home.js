import './App.css';
import DiscountBlock from './discount';
import DealsBlock from './deals-block';
import BrandsBlock from './brands-block';
import TrendingBlock from './trend-block';
import Demo from './demo';
import RakhiBlock from './rakhi-block';
// import Gallery from './demo';
// import HomeFooter from './home-footer';
// import Kurtis from './kurtis';
// import SingleProduct from './singleProductLayout';



function Home() {
  return (
    <div className="home-bg">
       
      <DiscountBlock/>
      <DealsBlock/>
      <RakhiBlock/>
      <BrandsBlock/>
      <TrendingBlock/>
      {/* <Gallery/> */}
      </div>
  );
}

export default Home;