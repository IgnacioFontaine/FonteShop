import ProductCard from "./Product/productCard";
import { Grid, Typography } from "@mui/material";
import products from "../assets/Data/dataProducts";




export function Offers() {
  return (
    <Grid container spacing={1} sx={{backgroundColor:"white", borderRadius:4}}>
      <Typography variant="h3" color={"text.primary"}>Offers</Typography>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}