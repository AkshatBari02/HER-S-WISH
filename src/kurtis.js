import CardLayout from "./card-layout";
import kurtisData from "./kurtisData";
import SingleProduct from "./singleProductLayout";

function Kurtis() {
  return (
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={kurtisData} />
    </div>
  );
}

export default Kurtis;