import { Grid, Typography, Box } from "@mui/material";
import products from "../Data/dataProducts";
import CheckOutCard from "../../Components/checkOutCard";

export default function CheckOutPage() {

  function ShopProducts() {
    return (<>
      {products.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
            <CheckOutCard key={item.id} product={item} />
          </Grid>
        ))}
      
    </>)
  }
  function Purchease() {
    return (
      <Box container sx={{ maxWidth: 400, maxHeight:450, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6, p:1, mr:2  }}>
            <Typography variant="h4" fontFamily={"fantasy"}>Purchase Summary</Typography>
            <Typography variant="h5">Items:</Typography>
            <Typography variant="h5">Total:</Typography>
            <button>Buy</button>
          </Box>
    )
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
          <Purchease />
        </Grid>
      </Grid>
    </div>
  )
}