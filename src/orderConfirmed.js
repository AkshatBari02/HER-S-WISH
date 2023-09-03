import { Link } from "react-router-dom";

function OrderConfirmed(){
    return(
        <>
        <div className="container msg-container">
            <img src={require(`./additional images/854acd8656cd54e19d6ba758f806d6ff.gif`)} alt="" style={{borderRadius:"50%"}}/>
            <div className="order-confirmed-card centered">
      <h3>Order Confirmed</h3>
      <p>Your order has been confirmed. Thank you for shopping with us!</p>
      <Link to="/"><button type="submit" class="btn btn-primary" style={{fontSize:"20px"}}>Continue Shopping</button></Link><br/>
    </div>
    </div>
        </>
    )
  }
  export default OrderConfirmed;