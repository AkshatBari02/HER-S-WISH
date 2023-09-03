import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";


function CardLayout({ data }) {
  return (
    <>
    <div className="row container" style={{marginLeft:"95px"}}>
      {data.map((item, index) => (
        <div className="card-s col-lg-4 col-sm-4 col-md-4" style={{ flexGrow: "1", padding: "2% 5%" }} key={index}>
          <Link to={`/product/${item.id}`} style={{textDecoration:"none",color:"black"}}>
          <Card sx={{ maxWidth: 345,background:"none",boxShadow:"none",paddingTop:"10px"}} className="prod-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.head}
                style={{ width:"70%",height:"300px",marginLeft:"30px"}}
              />
              <CardContent>
                <Typography gutterBottom variant="inherit" component="div">
                  <b style={{fontSize:"20px"}}>{item.head}</b><br></br>
                  {item.description}<br></br>
                  <b style={{fontSize:"18px"}}>₹{item.price}/-</b>
                  <strike style={{color:"red",fontSize:"14px",padding:"5px 3px",}}>₹{item.prePrice}</strike>
                  {item.discount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
}
export default CardLayout;