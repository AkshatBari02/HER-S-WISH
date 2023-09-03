import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class DealsBlock extends React.Component {
 render() {
   return (
    <>
     <div>
      <div className="deals-header container">
       <h1><b>GREAT! DEALS!!</b></h1>
       <span><b>Get the Biggest Deals Ever!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/deal-1`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-1.jpg`)} alt="product-1" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>CRAFT & FASHION</b></h4>
                  <span className="deals-span">A-Line Knee-Length Casual Wear Dress</span><br/>
                  <span><b className="deals-price">₹949/- </b><strike className="deals-strike"> ₹1,999</strike> (-53%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-2`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-2.png`)} alt="product-2" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Fibre-2-Fashion</b></h4>
                  <span className="deals-span">Awesome Foil Printed Fasionable Gown</span><br/>
                  <span><b className="deals-price">₹1,700/- </b><strike className="deals-strike"> ₹2,550</strike> (-53%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-3`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-31.png`)} alt="product-3" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Kesari Textile</b></h4>
                  <span className="deals-span">Rayon Blend Stitched Anarkali Gown for Women</span><br/>
                  <span><b className="deals-price">₹1,049/- </b><strike className="deals-strike"> ₹2,499</strike> (-58%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-4`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-4.jpg`)} alt="product-4" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>W for Women</b></h4>
                  <span className="deals-span">Women Viscose Rayon Kurta and Dupatta Set</span><br/>
                  <span><b className="deals-price">₹999/- </b><strike className="deals-strike"> ₹2,500</strike> (-60%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-5`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-5.jpg`)} alt="product-5" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Generic Clothings</b></h4>
                  <span className="deals-span">Bridal Style Anarkali Gown Suit for Women</span><br/>
                  <span><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹3,999</strike> (-50%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-6`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-6.jpg`)} alt="product-6" className="deals-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>ADMIRIA Women</b></h4>
                  <span className="deals-span">Attractive Off White Muslin Gown for Women</span><br/>
                  <span><b className="deals-price">₹2,900/- </b><strike className="deals-strike"> ₹3,999</strike> (-27.5%)</span>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/deal-7`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-7.jpg`)} alt="product-7" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>BIBA</b></h4>
                  <span className="deals-span">Pink Net Embroidered Blouse,lehenga & Cape Set</span><br/>
                  <span><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-8`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-8.jpg`)} alt="product-8" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>FabCartz</b></h4>
                  <span className="deals-span">Self Design Semi-Stitched Lehega Choli</span><br/>
                  <span><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹5,999</strike> (-66%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-9`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-9.jpg`)} alt="product-9" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Label D11</b></h4>
                  <span className="deals-span">Label D11 Women Georgette Maxi Anarkali Gown Dress</span><br/>
                  <span><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-10`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deals-10.jpg`)} alt="product-10" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Jaipur Attire</b></h4>
                  <span className="deals-span">JAIPUR ATTIRE Women's Cotton Flared Indo Western Dress</span><br/>
                  <span><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹5,999</strike> (-66%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-11`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deals-11.jpg`)} alt="product-11" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Generic</b></h4>
                  <span className="deals-span">Women's Fully Stitched Soft Silk Indo-Western Long Gowns</span><br/>
                  <span><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-12`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deals-12.jpg`)} alt="product-12" className="deals-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>Amrutam Fab</b></h4>
                  <span className="deals-span">Georgette Semi-stitched Lehenga Choli</span><br/>
                  <span><b className="deals-price">₹947/- </b><strike className="deals-strike"> ₹4,999</strike>(-81%)</span>
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
export default DealsBlock;