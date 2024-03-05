import ProductCard from "./Product/productCard";
import { Grid } from "@mui/material";
import products from "../assets/Data/dataProducts";

export function Products() {
  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}