import CardLayout from "./card-layout";
import SpecialsData from "./specials-data";


function Specials() {
  return (
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={SpecialsData} />
    </div>
  );
}
export default Specials;