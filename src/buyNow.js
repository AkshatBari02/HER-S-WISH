import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "./allProductDetails";

function BuyNow() {
  const { id } = useParams(); // Get the product ID from URL params
  console.log(id);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Find the product based on the product ID
    const selectedProduct = Data.find((product) => product.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
      calculateTotalAmount(selectedProduct.price, quantity);
    }
  }, [id, quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    calculateTotalAmount(product.price, newQuantity);
  };

  const calculateTotalAmount = (price, qty) => {
    const priceWithoutCommas = parseFloat(price.replace(/,/g, ""));
    const total = priceWithoutCommas * qty;
    setTotalAmount(total);
  };

  return (
    <div style={{ padding: "10vw",paddingBottom:"0" }}>
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div class="card mb-3" style={{ maxWidth: "90%" }}>
                <div class="row g-0">
                  <div class="col-6">
                    <img
                      src={product.img}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-6">
                    <div class="card-body">
                      <h1 class="card-title">{product.head}</h1>
                      <p
                        class="card-text"
                        style={{ fontWeight: "bold", fontSize: "2vw" }}
                      >
                        ₹{product.price}/-
                      </p>
                      <label>
                        <br />
                        <br />
                        <b>Quantity:</b>
                        <input
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          min={1}
                        />
                      </label>
                      <br />
                      <hr />
                      <p style={{ fontSize: "1.5vw" }}>
                        <b style={{ color: "crimson" }}>Total Amount:</b>{" "}
                        <b>₹{totalAmount}/-</b>
                      </p>
                      <Link
                        to="/confirm"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <button
                          className="btn btn-primary"
                          style={{ padding: "0.2rem 5rem" }}
                        >
                          Place Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-4"
              style={{ marginLeft: "-100px" }}
            >
              <img
                src={require(`./additional images/buynow.png`)}
                alt="..."
                className="buynow-cardimg"
              />
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ padding: "20vw" }}>Product Out of Stock.</h1>
      )}
    </div>
  );
}

export default BuyNow;
