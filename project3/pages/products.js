import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Image from "next/image"

function Products({products}) {
  return (
    <div>
      <Nav />

      <header className="header">
        <h1>Our Products</h1>
        <p>Discounted products</p>
      </header>

      <section className="section">
        <div className="product-grid">
          <div className="product-card">
            <Image src={products[0].image} alt="Product Name" width={300} height={400}/>
            <h2>{products[0].title}</h2>
            <p className ="price">{products[0].price}</p>
            <p>{products[0].description}</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <Image src={products[1].image} alt="Product Name" width={300} height={400}/>
            <h2>{products[1].title}</h2>
            <p className ="price">{products[1].price}</p>
            <p>{products[1].description}</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more product cards here  */}
        </div>

      </section>

      <Footer />


    </div>

  );
}

export default Products;

export async function getServerSideProps(){
  const response = await fetch("http://localhost:8080/products")
  const data = await response.json()

  return{
    props:{
      products:data
    }
  }
}


