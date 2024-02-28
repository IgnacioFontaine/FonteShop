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
        <h2>Body</h2>
        <ProductCard></ProductCard>
      </div>
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  )
}

export default App;
