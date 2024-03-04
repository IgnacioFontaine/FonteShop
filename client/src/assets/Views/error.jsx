import { Typography, Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate()
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", height:300, width:300}}>
      <Typography variant="h1" fontFamily={"fantasy"}>Error 404</Typography>
      <Typography variant="h3" >Return to Home</Typography>
      <Button onClick={()=>navigate("/")} sx={{ bgcolor: "#FEDDBF", color: "black", ":hover": { bgcolor: '#FFA657', color: "white" }, mb:2, mt:2 }} >Home</Button>
    </Box>
  )
}