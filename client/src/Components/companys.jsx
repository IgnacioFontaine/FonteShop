import { Typography, Box } from "@mui/material";
import products from "../assets/Data/dataProducts";

const uniqueBrandsSet = new Set(products.map(item => item.brand));
// const uniqueBrandsArray = Array.from(uniqueBrandsSet);

console.log(uniqueBrandsSet);


export function Companys() {
  return (
    <Box xs={12} sm={6} md={4}>
      <Typography variant="h2">Brands</Typography>
      <Box sx={{display:"flex", p:2, textAlign:"center"}} >
        {Array.from(uniqueBrandsSet).map((item, index) => (
          <Typography key={index} sx={{m:2}}>{item}</Typography>
        ))}
      </Box>
    </Box>
  );
}