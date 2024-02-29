import ProductCard from "../Product/productCard";
import { Grid } from "@mui/material";

export function Products() {
  return (
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 6, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
            <ProductCard />
          </Grid>
        ))}
    </Grid>
  )
}