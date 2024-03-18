import { Box, Grid, Typography} from "@mui/material";
import ProductLikeCard from "../../Components/Product/productLike";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';

export default function LikedView() {
  const favorite_products = useSelector((state) => state.products.like_products);

  function LikeProducts() {
    return (<>
      {favorite_products?.map((item)=> (
        <Grid item key={item.id} sx={{minHeight:472, minWidth:350}} >
            <ProductLikeCard  product={item} />
          </Grid>
        ))}
    </>)
  }
    
  return (
    <div>
      <Grid container spacing={3}>
         <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1, mt:2}}>
           <FavoriteBorderIcon fontSize="large"/>
           <Typography variant="h2" fontFamily={"fantasy"}>Favorites</Typography>
           <FavoriteBorderIcon fontSize="large"/>
         </Grid>
        <Grid item xs={10} sm={12} md={12} container spacing={2} sx={{  minHeight:655, p:2}}   >
          {favorite_products.length >0 ?
            <LikeProducts /> : (
              <Box sx={{minHeight:600, minWidth:800, alignContent:"center",textAlign:"center"}}>
                <Typography variant="h3" fontFamily={"fantasy"} sx={{textAlign:"center", justifyContent:"center", alignItems:"center"}} >Not Favorites yet</Typography>
              </Box>
              )}
        </Grid>
      </Grid>
    </div>
  )
}