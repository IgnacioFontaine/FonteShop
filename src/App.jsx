import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ProductCard from './Components/Product/productCard';
import NavBar from './Components/NavBar/navBar';

function App() {

  return (
    <div className='app'>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <ProductCard></ProductCard>
      </div>
      <div>
        <h5>Footer</h5>
      </div>
    </div>
  )
}

export default App;
