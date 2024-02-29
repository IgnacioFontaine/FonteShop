import ProductCard from "../../../Components/Product/productCard";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 6, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
            <ProductCard />
          </Grid>
        ))}
    </Grid>)
}