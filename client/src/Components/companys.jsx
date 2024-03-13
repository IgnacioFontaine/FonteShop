import { Typography, Box } from "@mui/material";
import products from "../assets/Data/dataProducts";

const uniqueBrandsSet = new Set(products.map(item => item.brand));
const uniqueBrandsArray = Array.from(uniqueBrandsSet);

console.log(uniqueBrandsArray);


export function Companys() {
  return (
    <Box xs={12} sm={6} md={4}>
      <Typography variant="h2">Brands</Typography>
      <Typography variant="body2">{uniqueBrandsArray}</Typography>
    </Box>
  );
}