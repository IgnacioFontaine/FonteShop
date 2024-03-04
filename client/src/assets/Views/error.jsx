import { Typography, Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate()
  return (
    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", height:650, width:1100}}>
      <Typography variant="h1" fontFamily={"fantasy"}>Error 404</Typography>
      <Typography variant="h3" >Return to Home</Typography>
      <Button onClick={()=>navigate("/")} sx={{ bgcolor: '#FFA657', color: "black", width:"100px" , mb:2, mt:2, alignItems:"center", justifyContent:"center" }} >Home</Button>
    </Box>
  )
}