import { Box } from "@mui/material";
import { Products } from "../../Components/products";
import { Offers } from "../../Components/Offers/offers";
import Companys from "../../Components/companys";

export default function Home() {
  return (
    <Box sx={{ mt: 1.5, ml: 5 }}>
      <Offers />
      <Products />
      {/* <Companys /> */}
    </Box>
  )
}