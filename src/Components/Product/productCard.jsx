import "./productCard.css"

export function ProductCard() {
  return (
    <section className="card">
      <header className="card-header">
        <img src="..."  alt="..."></img>
      </header>
      <body className="card-body">
        <h5 >Card title</h5>
        <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p ><small >Last updated 3 mins ago</small></p>
      </body>
      <footer className="card-footer">
        <button>Me gusta</button>
        <button>Comprar</button>
      </footer>
</section>
  )
}