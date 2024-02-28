import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductCard } from './Components/Product/productCard';

function App() {

  return (
    <div>
      <h1 className="container py-4 px-3 mx-auto bg-blue">FontShop</h1>
      <ProductCard></ProductCard>
    </div>
  )
}

export default App;
