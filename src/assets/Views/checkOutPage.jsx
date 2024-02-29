import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../../Components/Product/productCard";
import products from "../Data/dataProducts";

export default function CheckOutPage() {

  function ShopProducts() {
    return (<>
      {products.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
            <ProductCard key={item.id} product={item} />
          </Grid>
        ))}
      
    </>)
  }
    
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" fontFamily={"fantasy"}>Shopping Cart</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}  >
          <ShopProducts  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{alignContent:"center"}}>
          <Box container sx={{ maxWidth: 400, maxHeight:450, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6, p:1  }}>
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