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
import { useSelector } from 'react-redux';


export default function ProductCard({ product }) {
  const { id, title, description, price, category, thumbnail } = product;

  const purchease_products = useSelector((state) => state.products.shop_product);
  const favorite_products = useSelector((state) => state.products.like_products);

  const containsPurchease = purchease_products.some(obj => obj.id === id);
  const containsFavorite = favorite_products.some(obj => obj.id === id);

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
    return isFav;
  };

  function  FavoriteButton ({product}){
    return (containsFavorite ?
      ( <IconButton aria-label="remoove to favorites" onClick = {() =>( dispatch(removeToLike(product.id), handleFavorite(product.id)))}>
          <FavoriteIcon  />
        </IconButton>)
    :
      (<IconButton aria-label="add to favorites" onClick={() => (dispatch(addToLike(product), handleFavorite(product.id)))}>
          <FavoriteBorderIcon  />
        </IconButton>))}


  //Manejo Compras
  const handleShop = (id) => {
    if (isShop) {
      setIsShop(false);
      removeToShop(id);
    } else {
      setIsShop(true);
      addToShop(product);
    }
    return isShop;
  };
  
  function ShopButton ({product}){
    return (containsPurchease ?
      ( <IconButton aria-label="remoove to shop" onClick = {() => (dispatch(removeToShop(product.id), handleShop(product.id)))}>
          <RemoveShoppingCartIcon  />
        </IconButton>)
    :
      ( <IconButton aria-label="add to shop" onClick = {() => (dispatch(addToShop(product)), handleShop(product.id))}>
          <AddShoppingCartIcon />
        </IconButton>))}


  return (
    <Card sx={{ maxWidth: 300, maxHeight:400, backgroundColor:'#FFA657',
    transition: 'transform 0.3s ease', 
    '&:hover': {
      transform: 'scale(1.02)', 
    }}} key={id}>
      <CardHeader
        title={product.title}
        subheader={product.category}
        sx={{fontFamily:"fantasy"}}
      />
      <CardMedia
        component="img"
        height="160"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{maxHeight:20}}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{alignContent:"center", justifyContent:"space-evenly"}}>
          <FavoriteButton product={product} id={id} />
          <ShopButton product={product} id={id} />
        <CardContent>
        <Typography variant="h6" color="text.secondary" >
          ${product.price}
        </Typography>
      </CardContent>
      </CardActions>
    </Card>
  );
}
