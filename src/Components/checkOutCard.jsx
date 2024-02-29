import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function CheckOutCard({product}) {
  const { id, title, description, price, rating, thumbnail } = product;
  return (
    <Card sx={{ maxWidth: 300, maxHeight:400, backgroundColor:'#FFA657' }} key={id}>
      <CardHeader
        title={product.title}
        sx={{  maxHeight:65 }}
      />
      <CardMedia
        component="img"
        height="160"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 25, p: 1, gap: 2, justifyContent: "center", alignItems: "center" }}>
          <StarRateIcon />
          {product.rating}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{alignContent:"center", justifyContent:"space-evenly"}}>
        <IconButton aria-label="delete">
          <RemoveShoppingCartIcon />
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