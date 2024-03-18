import { Box, Grid, Typography} from "@mui/material";
import CheckOutCard from "../../Components/checkOutCard";
import { Total } from "../../Components/total";
import { useSelector } from "react-redux";

export default function CheckOutPage() {
  const purchease_products = useSelector((state) => state.products.shop_product);

  function ShopProducts() {
    return (< >
      {purchease_products.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id} sx={{minHeight:472}}>
            <CheckOutCard key={item.id} product={item} />
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
        <Grid item xs={12} sm={12} md={12} container spacing={2} sx={{  minHeight:585, p:1.5 }}  >
          {purchease_products.length >0 ?
            <ShopProducts /> : (
              <Box sx={{minHeight:550, alignContent:"center"}}>
                <Typography variant="h3" fontFamily={"fantasy"} sx={{textAlign:"center", justifyContent:"center", alignItems:"center"}}  >Return to buy products!</Typography>
              </Box>
              )}
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{alignContent:"center"}}>
          <Total />
        </Grid>
      </Grid>
    </div>
  )
}