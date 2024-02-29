import { Grid, Typography} from "@mui/material";
import products from "../Data/dataProducts";
import ProductCard from "../../Components/Product/productCard";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function LikedView() {

  function LikeProducts() {
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
        <Grid item xs={12} sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1}}>
          <FavoriteBorderIcon fontSize="large"/>
          <Typography variant="h2" fontFamily={"fantasy"}>favorites</Typography>
          <FavoriteBorderIcon fontSize="large"/>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={3} sx={{ml:7}} >
          <LikeProducts  />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" fontFamily={"fantasy"}>They can be Yours!</Typography>
        </Grid>
      </Grid>
    </div>
  )
}