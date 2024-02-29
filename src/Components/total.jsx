import { Box, Typography, Button } from "@mui/material"

export function Total() {
    return (
      <Box container sx={{ maxWidth: 400, maxHeight:450, backgroundColor:'#FFA657', color: "black", borderRadius: 2, boxShadow: 6, p:1, mr:2  }}>
            <Typography variant="h4" fontFamily={"fantasy"}>Purchase Summary</Typography>
            <Typography variant="h5">Items: 2</Typography>
            <Typography variant="h5">Total: $2.000</Typography>
            <Button variant="contained" sx={{bgcolor:"#FEDDBF", color:"black", ":hover":{bgcolor:'#FFA657', color:"white"}}}>Continue</Button>
          </Box>
    )
  }