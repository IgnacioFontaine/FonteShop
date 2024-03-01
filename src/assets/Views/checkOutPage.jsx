import { Grid, Typography} from "@mui/material";
// import products from "../Data/dataProducts";
import CheckOutCard from "../../Components/checkOutCard";
import { Total } from "../../Components/total";
// import { useSelector } from "react-redux";
import store from "../../Redux/store";

export default function CheckOutPage() {
  const subscribe_store = store.getState()
  
  const purchease_products = subscribe_store.products.shop_product;
  console.log(purchease_products.length);

  function ShopProducts() {
    return (<>
      {purchease_products.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
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
        <Grid item xs={12} sm={8} md={9} container spacing={2}  >
          <ShopProducts  />
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{alignContent:"center"}}>
          <Total />
        </Grid>
      </Grid>
    </div>
  )
}