import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Image from "next/image"
import {useState} from "react";
import Head from "next/head";

function Products({products}) {

  const[button1Visible,setButton1Visible] = useState(!products[0].purchased);
  const[button2Visible,setButton2Visible] = useState(!products[1].purchased);

  const handleClick = async (event) =>{
    
    //this code is executed client-side (on the browser)
    //console.log("test");
    const id = event.target.dataset.id;
    console.log("Product id chosen:"+id);

    const response = await fetch(`http://localhost:8080/products/${id}`,{
      method: "PATCH",
      body: JSON.stringify({purchased:true}),
      headers: {'Content-Type':'application/json'}
    });

    if(id==="1"){
      setButton1Visible(false);
    }
    else if(id==="2"){
      setButton2Visible(false);
    }

  }

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta 
          name="description"
          content="Check out iPhone 12 XR Pro and Iphone etc. Visit our local store at Mosta"
        />
      </Head>

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
            {
              button1Visible && (
                <button onClick={handleClick} data-id={products[0].id}>Add to Cart</button>
              )
            }
          
          </div>

          <div className="product-card">
            <Image src={products[1].image} alt="Product Name" width={300} height={400}/>
            <h2>{products[1].title}</h2>
            <p className ="price">{products[1].price}</p>
            <p>{products[1].description}</p>
            {
              button2Visible && (
                <button onClick={handleClick} data-id={products[1].id}>Add to Cart</button>
              )
            }
            
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


