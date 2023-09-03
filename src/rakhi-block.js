import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class RakhiBlock extends React.Component {
 render() {
   return (
    <>
     <div>
      <div className="rb-header container">
       <h1><b>Threads of Love: Rakhi Fashion</b></h1>
       <span><b>Make Your Bonds Stronger!!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/rakhi-1`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-1.jpg`)} alt="product-1" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>BIBA</b></h4>
                  <span className="rb-span">Indian hand painted anarkali gown & dupatta kurta</span><br/>
                  <span><b className="rb-price">₹5,999/- </b><strike className="rb-strike"> ₹9,999</strike> (-40%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-2`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-2.jpg`)} alt="product-2" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Ruhani Studio</b></h4>
                  <span className="rb-span">Indian hand painted anarkali gown & dupatta kurta</span><br/>
                  <span><b className="rb-price">₹5,999/- </b><strike className="rb-strike"> ₹9,999</strike> (-40%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-3`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-3.jpg`)} alt="product-3" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Andaaz Fashion</b></h4>
                  <span className="rb-span">Fashionable Semi-Stitched Net Suit </span><br/>
                  <span><b className="rb-price">₹3,999/- </b><strike className="rb-strike"> ₹6,999</strike> (-43%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-4`} className="col-2" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-4.jpg`)} alt="product-4" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Karma Place</b></h4>
                  <span className="rb-span">Poly Georgette Pattern Flared Sleeve Top</span><br/>
                  <span><b className="rb-price">₹5,799/- </b><strike className="rb-strike"> ₹6,999</strike> (-17%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-5`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-5.jpg`)} alt="product-5" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Aza Fashions</b></h4>
                  <span className="rb-span">Onaya Women Green Organza Sequin Work Lehenga Set</span><br/>
                  <span><b className="rb-price">₹10,000/- </b><strike className="rb-strike"> ₹15,000</strike> (-33.33%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-6`} className="col-2 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-6.jpg`)} alt="product-6" className="rb-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>Designers Lehenga</b></h4>
                  <span className="rb-span">Occasional Wear Printed 3-Piece</span><br/>
                  <span><b className="rb-price">₹3,600/- </b><strike className="rb-strike"> ₹5,150</strike> (-43%)</span>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/rakhi-7`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-7.jpg`)} alt="product-7" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>FashionDream</b></h4>
                  <span className="rb-span">Full Length Festive/Wedding Dress </span><br/>
                  <span><b className="rb-price">₹1,200/- </b><strike className="rb-strike"> ₹1,500</strike> (-20%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-8`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-8.jpg`)} alt="product-8" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Sabhyata</b></h4>
                  <span className="rb-span">Girls pure silk Banarasi Lehenga choli with dupatta</span><br/>
                  <span><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹1,800</strike> (-16.66%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-9`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-9.jpg`)} alt="product-9" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Aurelia</b></h4>
                  <span className="rb-span">Full Length Festive Dress for Women</span><br/>
                  <span><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹2,500</strike> (-40%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-10`} className="col-2" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-10.jpg`)} alt="product-10" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Generic</b></h4>
                  <span className="rb-span">Poly Cotton Kurti with Dupatta Set for Raksha Bandhan</span><br/>
                  <span><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹1,800</strike> (-16.66%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-11`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-11.jpg`)} alt="product-11" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Fashion2wear</b></h4>
                  <span className="rb-span">Fashion2wear Women's A-Line Maxi Dress</span><br/>
                  <span><b className="rb-price">₹479/- </b><strike className="rb-strike"> ₹999</strike> (-52%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-12`} className="col-2 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-12.jpg`)} alt="product-12" className="rb-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>Sheetal Associates</b></h4>
                  <span className="rb-span">Sheetal Associates A-Line Maxi Dress for Women</span><br/>
                  <span><b className="rb-price">₹335/- </b><strike className="rb-strike"> ₹1,999</strike>(-83%)</span>
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
export default RakhiBlock;