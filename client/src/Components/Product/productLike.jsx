import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { removeToLike, removeToShop, addToShop } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useSelector } from 'react-redux'; 
import { useState } from 'react';


export default function ProductLikeCard({ product }) {
  const { id, title, description, price, category, thumbnail } = product;
  const dispatch = useDispatch()

  
  const [isShop, setIsShop] = useState(false);
  const products_shop = useSelector((state) => state.products.shop_product);

  const containsObject = products_shop.some(obj => obj.id === id);

  //Manejo Compras
  const handleShop = (id) => {
    if (containsObject) {
      setIsShop(false);
      removeToShop(id);
    } else {
      setIsShop(true);
      addToShop(product);
    }
    return isShop;
  };

  function ShopButton ({id}){
    return (isShop ?
      ( <IconButton aria-label="remoove to shop" onClick = {() => (dispatch(removeToShop(id), handleShop(id)))}>
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
          <IconButton aria-label="remoove to favorites" onClick = {() =>( dispatch(removeToLike(id)))}>
            <FavoriteIcon  />
          </IconButton>
          <ShopButton />
        <CardContent>
        <Typography variant="h6" color="text.secondary" >
          ${product.price}
        </Typography>
      </CardContent>
      </CardActions>
    </Card>
  );
}
