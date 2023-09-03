import { Link } from "react-router-dom";
import CardLayout from "./card-layout";
import DressesData from "./dresses-Data";


function Dresses() {
  return (
    
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={DressesData} />
    </div>
  );
}
export default Dresses;