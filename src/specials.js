import Data from "./allProductDetails";
import CardLayout from "./card-layout";

function Specials() {
  const filteredData = Data.filter(item => item.id.includes("special"));
  return (
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}
export default Specials;