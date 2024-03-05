import { Box, Grid, Typography} from "@mui/material";
import ProductLikeCard from "../../Components/Product/productLike";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';

export default function LikedView() {
  const favorite_products = useSelector((state) => state.products.like_products);

  function LikeProducts() {
    return (<>
      {favorite_products?.map((item)=> (
        <Grid item xs={12} sm={8} md={6} lg={4} key={item.id} sx={{minHeight:472}} >
            <ProductLikeCard  product={item} />
          </Grid>
        ))}
    </>)
  }
    
  return (
    <div>
      <Grid container spacing={3} sx={{mt:1}}>
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1}}>
          <FavoriteBorderIcon fontSize="large"/>
          <Typography variant="h2" fontFamily={"fantasy"}>favorites</Typography>
          <FavoriteBorderIcon fontSize="large"/>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={3} sx={{ ml: 7, minHeight:570}} >
          {favorite_products.length >0 ?
            <LikeProducts /> : (
              <Box sx={{minHeight:540}}>
                <Typography variant="h2" fontFamily={"fantasy"} sx={{ height: 472, width: 460, textAlign: "center", justifyContent: "center" }}>Not Favorites yet</Typography>
              </Box>
              )}
        </Grid>
      </Grid>
    </div>
  )
}