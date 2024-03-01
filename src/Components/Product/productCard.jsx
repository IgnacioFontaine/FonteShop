import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToLike, addToShop, removeToLike, removeToShop } from '../../Redux/actions';
import { useState } from 'react';


export default function ProductCard({ product }) {
  const { id, title, description, price, category, thumbnail } = product;

  const dispatch = useDispatch()
  const [isShop, setIsShop] = useState(false);
  const [isFav, setIsFav] = useState(false);

  //Manejo Favoritos
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeToLike(id);
    } else {
      setIsFav(true);
      addToLike(product);
    }
  };


  //Manejo Compras
  const handleShop = () => {
    if (isFav) {
      setIsShop(false);
      removeToShop(id);
    } else {
      setIsShop(true);
      addToShop(product);
    }
  };


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
        <IconButton aria-label="add to favorites" onClick={() => dispatch(addToLike(product))}>
          <FavoriteIcon  />
        </IconButton>
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
