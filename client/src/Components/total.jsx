import store from "../Redux/store";
import axios from "axios"
import { Box, Typography, Button } from "@mui/material"
import { useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

export function Total() {

  const subscribe_store = store.getState()  
  const purchease_products = subscribe_store.products.shop_product;
  const total_price = purchease_products.reduce((total, objeto) => total + objeto.price, 0);

  //MercadoPago
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_MERCADO_PAGO_TOKEN, {
    locale:"es-AR",
  });

    const createPreference = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_CREATE_PREFERENCE}`, {
          quantity: 1,
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