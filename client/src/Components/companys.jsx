import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import products from "../assets/Data/dataProducts";

const uniqueBrandsSet = new Set(products.map(item => item.brand));
// const uniqueBrandsArray = Array.from(uniqueBrandsSet);

const brands = Array.from(uniqueBrandsSet);

const Companys = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Lógica para desplazamiento infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevPosition => prevPosition + 1);
    }, 1000); // Ajusta el intervalo según tus necesidades

    return () => clearInterval(interval);
  }, []);

  return (
    <Box xs={12} sm={6} md={4} width={1100}>
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor:"#F5C99E"
        }}
      >
        {brands.map((brand, index) => (
          <Typography
            key={index}
            sx={{
              m: 2,
              transform: `translateX(-${scrollPosition * 100}px)`, // Ajusta la cantidad de desplazamiento
              transition: 'transform 2s ease ', // Añade una transición suaves
            }}
          >
            {brand}
          </Typography>
        ))}
      </div>
    </Box>
  );
};

export default Companys;

