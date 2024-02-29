import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/navBar';
import Home from './assets/Views/home';
import { Footer } from './Components/footer';
import CheckOutPage from './assets/Views/checkOutPage';
import SingIn from './assets/Views/singIn';
import Error from './assets/Views/error';

function App() {

  return (
    <div className='app'>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchease" element={<CheckOutPage />} />
          <Route path="/singIn" element={<SingIn />} />
          <Route path="*" element={<Error />}  />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
