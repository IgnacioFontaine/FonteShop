import { Box } from "@mui/material";
import Companys from "../../Components/companys";


export default function Dev() {
  
  return (
    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", height:650, width:1100}}>
      <Companys />
    </Box>
  )
}