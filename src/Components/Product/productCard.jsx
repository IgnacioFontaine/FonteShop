import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';  
import { useDispatch } from 'react-redux';
import { addToLike, addToShop, removeToLike, removeToShop } from '../../Redux/actions';
import { useState } from 'react';


export default function ProductCard({ product }) {
  const { id, title, description, price, category, thumbnail } = product;

  const dispatch = useDispatch()
  const [isShop, setIsShop] = useState(false);
  const [isFav, setIsFav] = useState(false);

  //Manejo Favoritos
  const handleFavorite = (id) => {
    if (isFav) {
      setIsFav(false);
      removeToLike(id);
    } else {
      setIsFav(true);
      addToLike(product);
    }
  };

  function  FavoriteButton ({id}){
    return (isFav ?
      ( <IconButton aria-label="remoove to favorites" onClick = {() =>( dispatch(removeToLike(id), handleFavorite(id)))}>
          <FavoriteIcon  />
        </IconButton>)
    :
      (<IconButton aria-label="add to favorites" onClick={() => (dispatch(addToLike(product), handleFavorite(id)))}>
          <FavoriteBorderIcon  />
        </IconButton>))}


  // //Manejo Compras
  const handleShop = (id) => {
    if (isFav) {
      setIsShop(false);
      removeToShop(id);
    } else {
      setIsShop(true);
      addToShop(product);
    }
  };
  
  const shopButton = ({id}) => {
    return (isShop ?
      ( <IconButton aria-label="remoove to shop" onClick = {() => (dispatch(removeToLike(id), handleShop(id)))}>
          <RemoveShoppingCartIcon  />
        </IconButton>)
    :
      ( <IconButton aria-label="add to shop" onClick = {() => (dispatch(addToShop(product)), handleShop(id))}>
          <AddShoppingCartIcon />
        </IconButton>))}


  return (
    <Card sx={{ maxWidth: 300, maxHeight:400, backgroundColor:'#FFA657' }} key={id}>
      <CardHeader
        title={product.title}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="160"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{maxHeight:40}}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{alignContent:"center", justifyContent:"space-evenly"}}>
        {/* <IconButton aria-label="add to favorites" onClick={() => dispatch(addToLike(product))}>
          <FavoriteIcon  />
        </IconButton> */}
          <FavoriteButton product={product} />
        <IconButton aria-label="shop"  onClick={()=>dispatch(addToShop(product))}>
          <AddShoppingCartIcon />
        </IconButton>
        <CardContent>
        <Typography variant="h6" color="text.secondary" >
          ${product.price}
        </Typography>
      </CardContent>
      </CardActions>
    </Card>
  );
}
