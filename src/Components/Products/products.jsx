import ProductCard from "../Product/productCard";
import { Grid } from "@mui/material";
import products from "../../assets/Data/dataProducts";

export function Products() {
  return (
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 6, md: 12 }}>
        {products.map((product)=> (
          <Grid item xs={3} sm={4} md={4} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
    </Grid>
  )
}