import { Box, Typography, Button } from "@mui/material"
import store from "../Redux/store";


export function Total() {
  const subscribe_store = store.getState()  
  const purchease_products = subscribe_store.products.shop_product;
  const total_price = purchease_products.reduce((total, objeto) => total + objeto.price, 0);

    return (
      <Box container sx={{ maxWidth: 400, maxHeight:450, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6, p:1, mr:2  }}>
            <Typography variant="h4" fontFamily={"fantasy"}>Purchase Summary</Typography>
        <Typography variant="h5">Items: {purchease_products?.length}</Typography>
        <Typography variant="h5">Total: ${total_price && total_price}</Typography>
            <Button variant="contained" sx={{bgcolor:"#FEDDBF", color:"black", ":hover":{bgcolor:'#FFA657', color:"white"}}}>Continue</Button>
          </Box>
    )
  }