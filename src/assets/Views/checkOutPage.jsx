import { Grid, Typography, Box } from "@mui/material";
import { Products } from "../../Components/products";

export default function CheckOutPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" fontFamily={"fantasy"}>Shopping Cart</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <Products />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Box container sx={{ maxWidth: 320, maxHeight:400, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6,p:1  }}>
            <Typography variant="h4" fontFamily={"fantasy"}>Purchase Summary</Typography>
            <Typography variant="h5">Items:</Typography>
            <Typography variant="h5">Total:</Typography>
            <button>Buy</button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}