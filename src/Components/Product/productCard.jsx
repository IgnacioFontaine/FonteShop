import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const productIphone = {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    }


export default function ProductCard() {

  return (
    <Card sx={{ maxWidth: 300, backgroundColor:'#FFA657' }}>
      <CardHeader
        title={productIphone.title}
        subheader={productIphone.category}
      />
      <CardMedia
        component="img"
        height="160"
        image={productIphone.images[3]}
        alt={productIphone.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productIphone.description}
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
        <Typography variant="body1" color="text.secondary" >
          ${productIphone.price}
        </Typography>
      </CardContent>
      </CardActions>
    </Card>
  );
}
