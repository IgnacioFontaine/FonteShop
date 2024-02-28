import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductCard } from './Components/Product/productCard';

function App() {

  return (
    <div className='app'>
      <div>
        <h1>FontShop</h1>
        <h2>Esta es la NavBar</h2>
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
