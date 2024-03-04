import { Box, Grid, Typography} from "@mui/material";
import ProductCard from "../../Components/Product/productCard";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import store from "../../Redux/store";

export default function LikedView() {
  const subscribe_store = store.getState()
  const favorite_products = subscribe_store.products.like_products;

  function LikeProducts() {
    return (<Box sx={{ minHeight:250}}>
      {favorite_products.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
            <ProductCard  product={item} />
          </Grid>
        ))}
    </Box>)
  }
    
  return (
    <div>
      <Grid container spacing={3} sx={{mt:1}}>
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1}}>
          <FavoriteBorderIcon fontSize="large"/>
          <Typography variant="h2" fontFamily={"fantasy"}>favorites</Typography>
          <FavoriteBorderIcon fontSize="large"/>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={3} sx={{ ml: 7, minHeight:250}} >
          {favorite_products.length >0 ?
          <LikeProducts />:<Typography variant="h2"fontFamily={"fantasy"} sx={{height:472, width:460, textAlign:"center", justifyContent:"center"}}>Not Favorites yet</Typography>}
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h4" fontFamily={"fantasy"}>They can be Yours!</Typography>
        </Grid>
      </Grid>
    </div>
  )
}