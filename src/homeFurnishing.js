import HomeFurnishingData from "./homeFurnishing-data";
import React from "react";
import CardLayout from "./card-layout";

function HomeFurnishing() {
  return (
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={HomeFurnishingData} />
    </div>
  );
}
export default HomeFurnishing;

