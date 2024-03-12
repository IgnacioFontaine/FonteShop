import { Box } from "@mui/material";
import { Products } from "../../Components/products";
import { Offers } from "../../Components/Offers/offers";

export default function Home() {
  return (
    <Box sx={{ mt: 1.5, ml: 5 }}>
      <Offers />
      <Products />
    </Box>
  )
}