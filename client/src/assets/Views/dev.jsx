import { Box, Typography } from "@mui/material";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";

import products from "../../assets/Data/dataProducts"

const uniqueBrandsSet = new Set(products.map(item => item.brand));
const brands = Array.from(uniqueBrandsSet);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResponsiveStack() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevPosition => {
        if (prevPosition >= brands.length) {
          return 0;
        } else {
          return prevPosition + 2;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Stack
        direction={{ xs: 'row', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{
          display: 'flex',
          overflow:"hidden",
          whiteSpace: 'nowrap',
          backgroundColor: "#F5C99E",
          height: "50px",
          marginTop:"20px"
        }}
      >
        {brands && brands.map(((brand, index)=>
          <Item key={index}
            sx={{
              transform: `translateX(-${scrollPosition * 100}px)`,
              transition: 'transform 2s ease',
              border: "1px solid #FCE4D2",
              borderRadius:2, 
              p:1
            }}
          >{brand}</Item>))}
      </Stack>
    </div>
  );
}



export default function Dev() {
  
  return (
    <Box >
      <ResponsiveStack></ResponsiveStack>
    </Box>
  )
}