import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar/navBar';
import Home from './assets/Views/home';
import { Footer } from './Components/Footer/footer';
import { Box } from '@mui/material';

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <NavBar />
      </div>
      <Box sx={{ml:7}}>
        <Home />
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
