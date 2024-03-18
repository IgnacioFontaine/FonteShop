import store from "../Redux/store";
import axios from "axios"
import { Box, Typography, Button } from "@mui/material"
import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

export function Total() {

  const subscribe_store = store.getState()  
  const purchease_products = subscribe_store.products.shop_product;
  const total_price = purchease_products.reduce((total, objeto) => total + objeto.price, 0);

  console.log("-----------------------");
  console.log("Cantidad: ", purchease_products.length);

  const titles = purchease_products.map(producto => producto.title);
  console.log("Titulos: ", titles);

  //MercadoPago
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-82be574c-0090-4cdc-81d4-5535eebd3b86", {
    locale:"es-AR",
  });

    const createPreference = async () => {
      try {
        const response = await axios.post("http://localhost:3000/create_preference", {
          title: "FonteShop",
          quantity:1,
          price: total_price,
        })

        const { id } = response.data;
        return id;
      } catch (error) {
        console.log(error);
      }
  }
  
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id)
    }
  };

    return (
      <Box container sx={{ maxWidth: 500, maxHeight:500, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6, p:1, mr:1  }}>
            <Typography variant="h4" fontFamily={"fantasy"}>Purchase Summary</Typography>
        <Typography variant="h5">Items: {purchease_products?.length}</Typography>
        <Typography variant="h5">Total: ${total_price && total_price}</Typography>
        <Button variant="contained" sx={{ bgcolor: "#FEDDBF", color: "black", ":hover": { bgcolor: '#FFA657', color: "white" }, mb:2, mt:2 }} onClick={handleBuy}>Continue</Button>
          {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }}  />}
      </Box>
    )
  }