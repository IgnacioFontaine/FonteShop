import ProductCard from "../Product/productCard";
import { Grid, Typography, Box } from "@mui/material";
import products from "../../assets/Data/dataProducts";

// Ordenamos los productos por precio de menor a mayor
const products_in_order = products.sort((a, b) => a.price - b.price);

// Tomamos los primeros tres productos
const inOffer = products_in_order.slice(0, 3);


export function Offers() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", mt:3, mb:3, backgroundColor:"white", borderRadius:3,mr:12}}>
      <Box>
        <Typography variant="h3" color={"#FFA657"} fontFamily={"fantasy"}>Offers</Typography>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-around", mt:3, mb:3, gap:12}}>
        {inOffer.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
      </Box>
    </Box>
  );
}