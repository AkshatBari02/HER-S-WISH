import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class TrendBlock extends React.Component {
 render() {
   return (
    <>
     <div>
      <div className="trend-header container">
       <h1><b>Dress to Impress!!</b></h1>
       <span><b>Unveiling the Trending Collection!!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/trend-1`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-1.jpg`)} alt="product-1" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Paheli Rani</b></h4>
                  <span className="trend-span">Cotton Rayon Ethnic Jacket,Top & Palazzo Set (Casual Wear)</span><br/>
                  <span><b className="trend-price">₹1,999/- </b><strike className="trend-strike"> ₹2,799</strike> (-28.5%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/trend-2`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-2.jpg`)} alt="product-2" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>DK Enterprise</b></h4>
                  <span className="trend-span">Bollywood Style Maroon Suit with Beautiful Printed Koti</span><br/>
                  <span><b className="trend-price">₹2,571/- </b><strike className="trend-strike"> ₹5,142</strike> (-50%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/trend-3`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-3.jpg`)} alt="product-3" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Amyra</b></h4>
                  <span className="trend-span">Bandhani satin cotton print Dupatta</span><br/>
                  <span><b className="trend-price">₹1,949/- </b><strike className="trend-strike"> ₹2,299</strike> (-15.22%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/trend-4`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-4.jpg`)} alt="product-4" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Pantaloons</b></h4>
                  <span className="trend-span">Georgette Sequins Embroidery Work Lehenga</span><br/>
                  <span><b className="trend-price">₹4,999/- </b><strike className="trend-strike"> ₹7,999</strike> (-37%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/trend-5`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-5.jpg`)} alt="product-5" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Fabja</b></h4>
                  <span className="trend-span">White Chain Stitch Work Salwar Suit</span><br/>
                  <span><b className="trend-price">₹10,000/- </b><strike className="trend-strike"> ₹15,000</strike> (-33.33%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/trend-6`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Trending images/trending-6.jpg`)} alt="product-6" className="trend-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>Generic</b></h4>
                  <span className="trend-span">Elha Silk Embroidered Kurta with Pants</span><br/>
                  <span><b className="trend-price">₹2,699/- </b><strike className="trend-strike"> ₹5,150</strike> (-47.5%)</span>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/trend-7`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-7.jpg`)} alt="product-7" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Madeesh</b></h4>
                  <span className="trend-span">Designer style Heavy Embroidery Salwar Suit for Women</span><br/>
                  <span><b className="trend-price">₹2,195/- </b><strike className="trend-strike"> ₹2,500</strike> (-12.2%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/trendl-8`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-8.jpg`)} alt="product-8" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Jompers Kurta</b></h4>
                  <span className="trend-span">White and black straight kurta 3-quarter sleeves</span><br/>
                  <span><b className="trend-price">₹1,500/- </b><strike className="trend-strike"> ₹1,800</strike> (-16.66%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/trend-9`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-9.jpg`)} alt="product-9" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Allen Solly</b></h4>
                  <span className="trend-span">Women's Seamless Strapless Crop Top Tube Top</span><br/>
                  <span><b className="trend-price">₹1,195/- </b><strike className="trend-strike"> ₹1,500</strike> (-20.33%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/trend-10`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-10.jpg`)} alt="product-10" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Jompers Kurta</b></h4>
                  <span className="trend-span">Vintage Beige Ditzy Floral Print Dress with Shoulder Ties</span><br/>
                  <span><b className="trend-price">₹1,999/- </b><strike className="trend-strike"> ₹2,999</strike> (-33.34%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/trend-11`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-11.jpg`)} alt="product-11" className="trend-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Levi's</b></h4>
                  <span className="trend-span">Tank tops-Criss Cross Tied Backless Rib-knit Cami Top for Girls</span><br/>
                  <span><b className="trend-price">₹1,595/- </b><strike className="trend-strike"> ₹2,500</strike> (-36.2%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/trend-12`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Trending images/trending-12.jpg`)} alt="product-12" className="trend-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>ZARA</b></h4>
                  <span className="trend-span">Casual wear distressed jeans and crop top</span><br/>
                  <span><b className="trend-price">₹3,899/- </b><strike className="trend-strike"> ₹5,999</strike>(-35%)</span>
                  </div>
                  </Link>
           </div>
         </div>
         </Carousel>
     </div>
     <hr/>
     </>
   );
 }
}
export default TrendBlock;