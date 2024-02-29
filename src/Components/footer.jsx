import { Box, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function RedesIcons() {
  return (
    <Box >
          <a href="https://github.com/IgnacioFontaine" target="_blank" rel="noopener noreferrer">
            <GitHubIcon color="black" sx={{color:"black"}} />
          </a>
          <a href="https://www.linkedin.com/in/ignacio-fontaine/" target="_blank" rel="noopener noreferrer" >
            <LinkedInIcon sx={{color:"black"}} />
          </a>
    </Box>
  )
}


export function Footer() {
  return (
   <Box sx={{mt:7,  backgroundColor:'#FFA657', height:85, display:"flex", justifyContent:"center", boxShadow:5}}> 
        <Box>
        <Typography sx={{mt:3}} variant="subtitle2">FonteShop (2024) &#169;</Typography>
        <Box sx={{display:"flex", gap:2, justifyItems:"center"}}>
          <Typography variant="subtitle2">Creado por Ignacio Fontaine (2024) &#169;</Typography>
          <RedesIcons/>
        </Box>
        </Box>
    </Box>
  )
}