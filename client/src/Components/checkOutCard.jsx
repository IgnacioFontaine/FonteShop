import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import StarRateIcon from '@mui/icons-material/StarRate';
import { removeToShop } from '../Redux/actions';
import { useDispatch } from 'react-redux';

export default function CheckOutCard({product}) {
  const { id, title, description, price, rating, thumbnail, stock } = product;
  const dispatch = useDispatch()

  return (
    <Card sx={{ maxWidth: 300, maxHeight:400, backgroundColor:'#FFA657',transition: 'transform 0.3s ease', 
    '&:hover': {
      transform: 'scale(1.02)', 
    } }} >
      <CardHeader
        title={product.title}
        subheader={stock >= 1 ? "In Stock":"Not Stock"}
        sx={{  maxHeight:65 }}
      />
      <CardMedia
        component="img"
        height="160"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxHeight: 25, p: 1, gap: 2, justifyContent: "center", alignItems: "center" }}>
          <StarRateIcon fontSize="small"/>{product.rating} /5 
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{alignContent:"center", justifyContent:"space-evenly"}}>
        <IconButton aria-label="delete" onClick={()=>dispatch(removeToShop(id))}>
          <RemoveShoppingCartIcon  />
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