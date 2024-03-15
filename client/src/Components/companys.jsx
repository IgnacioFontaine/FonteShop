import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import products from "../assets/Data/dataProducts";

const uniqueBrandsSet = new Set(products.map(item => item.brand));
const brands = Array.from(uniqueBrandsSet);

const Companys = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevPosition => {
        if (prevPosition >= brands.length) {
          return 0;
        } else {
          return prevPosition + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <Box xs={12} sm={6} md={4} width={1135} mt="10px" >
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: "#F5C99E"
        }}
      >
        {brands.map((brand, index) => (
          <Box key={index}>
            <Typography
            key={index}
            sx={{
              m: 2,
              transform: `translateX(-${scrollPosition * 100}px)`,
              transition: 'transform 1s ease',
              border: "1px solid #FCE4D2",
              borderRadius:2, 
              p:1.1
            }}
          >
            {brand}
          </Typography>
          </Box>
          
        ))}
      </div>
    </Box>
  );
};

export default Companys;
