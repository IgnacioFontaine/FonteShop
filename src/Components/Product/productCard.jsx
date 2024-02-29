import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard({id, title, description, price, category, thumbnail}) {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor:'#FFA657' }} key={id}>
      <CardHeader
        title={title}
        subheader={category}
      />
      <CardMedia
        component="img"
        height="160"
        image={thumbnail}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{alignContent:"center", justifyContent:"space-evenly"}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="shop">
          <AddShoppingCartIcon />
        </IconButton>
        <CardContent>
        <Typography variant="h6" color="text.secondary" >
          ${price}
        </Typography>
      </CardContent>
      </CardActions>
    </Card>
  );
}
