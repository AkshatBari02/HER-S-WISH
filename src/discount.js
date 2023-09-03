import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class DiscountBlock extends React. Component {
 render() {
   return (
    <>
     <div className="container" style={{paddingTop:"120px",paddingLeft:"150px",paddingRight:"150px"}}>
        <div style={{padding:"20px",backgroundColor:"#d4d5d5"}}>
       <Carousel autoPlay interval="5000" transitionTime="3000" infiniteLoop showThumbs={false}>
         <div>
           <img src={require(`./Discount images/offer-1.jpg`)} alt=""/>
         </div>
         <div>
           <img
             src={require(`./Discount images/offer-2.jpg`)}alt=""/>
         </div>
         <div>
           <img
             src={require(`./Discount images/offer-3.jpg`)}alt=""/>
         </div>
       </Carousel>
       </div>
     </div>
     <hr/>
     </>
   );
 }
}
export default DiscountBlock;
