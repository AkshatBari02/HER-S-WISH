import indoWesternData from "./indo-westernData";
import CardLayout from "./card-layout";

function IndoWestern() {
  return (
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={indoWesternData} />
    </div>
  );
}
export default IndoWestern;