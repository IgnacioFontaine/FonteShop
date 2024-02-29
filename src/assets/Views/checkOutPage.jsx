import { Grid, Typography } from "@mui/material";
import { Products } from "../../Components/products";

export default function CheckOutPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Shopping Cart</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <Products />
        </Grid>
        

      </Grid>
    </div>
  )
}