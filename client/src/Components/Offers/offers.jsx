import ProductCard from "./Product/productCard";
import { Grid, Typography } from "@mui/material";
import products from "../assets/Data/dataProducts";

// Ordenamos los productos por precio de menor a mayor
const products_in_order = products.sort((a, b) => a.price - b.price);

// Tomamos los primeros tres productos
const inOffer = products_in_order.slice(0, 3);


export function Offers() {
  return (
    <Grid container spacing={1} sx={{backgroundColor:"white", borderRadius:4}}>
      <Typography variant="h3" color={"text.primary"}>Offers</Typography>
      {inOffer.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}