import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/navBar';
import Home from './assets/Views/home';
import { Footer } from './Components/footer';
import CheckOutPage from './assets/Views/checkOutPage';
import Error from './assets/Views/error';
import LikedView from './assets/Views/likeView';
import SingInView from './assets/Views/singInView';
import SingUpView from './assets/Views/singUpView';


function App() {
  return (
    <div className='app'>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchease" element={<CheckOutPage />} />
          <Route path="/favorites" element={<LikedView />} />
          <Route path="/singIn" element={<SingInView />} />
          <Route path="/singUp" element={<SingUpView/>} />
          <Route path="*" element={<Error />}  />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
