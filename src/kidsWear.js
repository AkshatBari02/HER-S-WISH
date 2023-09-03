import CardLayout from "./card-layout";
import KidsWearData from "./kids-wear-data";

// function KidsWear() {
//   return (
//     <div style={{ paddingTop: "120px",backgroundColor:"#f9efdf" }}>
//       {KidsWearData.map((item, index) => (
//         <Card
//           key={index}
//           img1={item.img1}
//           head1={item.head1}
//           description1={item.description1}
//           price1={item.price1}
//           prePrice1={item.prePrice1}
//           discount1={item.discount1}

//           img2={item.img2}
//           head2={item.head2}
//           description2={item.description2}
//           price2={item.price2}
//           prePrice2={item.prePrice2}
//           discount2={item.discount2}

//           img3={item.img3}
//           head3={item.head3}
//           description3={item.description3}
//           price3={item.price3}
//           prePrice3={item.prePrice3}
//           discount3={item.discount3}
//         />
//       ))}
//     </div>
//   );
// }

function KidsWear() {
  return (
    <div style={{ paddingTop: "120px", backgroundColor: "#f9efdf" }}>
      <CardLayout data={KidsWearData} />
    </div>
  );
}

export default KidsWear;