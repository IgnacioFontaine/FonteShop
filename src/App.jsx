import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar/navBar';
import Home from './assets/Views/Home/home';
import { Footer } from './Components/Footer/footer';

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
