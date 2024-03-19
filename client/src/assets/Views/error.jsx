// import { Typography, Box,Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function Error() {
//   const navigate = useNavigate()
//   return (
//     <Box xs={12} sm={8} md={4} sx={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", height:650, width:1100}}>
//       <Typography variant="h1" fontFamily={"fantasy"}>Error 404</Typography>
//       <Typography variant="h3" >Return to Home</Typography>
//       <Button onClick={()=>navigate("/")} sx={{ bgcolor: '#FFA657', color: "black", width:"100px" , mb:2, mt:2, alignItems:"center", justifyContent:"center" }} >Home</Button>
//     </Box>
//   )
// }

import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box
      xs={2} sm={6} md={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80.2vh",
        width: "150vh", 
        padding: "16px", 
      }}
      
    >
      <Typography variant="h1" fontFamily="fantasy">
        Error 404
      </Typography>
      <Typography variant="h3">Return to Home</Typography>
      <Button
        onClick={() => navigate("/")}
        sx={{
          bgcolor: "#FFA657",
          color: "black",
          width: "100px",
          mt: 2,
        }}
      >
        Home
      </Button>
    </Box>
  );
}
