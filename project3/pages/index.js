import Nav from "../components/Nav"
import Footer from "../components/Footer"

function Home({ details }) {
  return (
    <div>
      <Nav/>

      <header className="header">
        <h1>Welcome to my website</h1>
        <p>subtitle</p>
       
      </header>

      <section className="section">
        <h2>Header Two</h2>
        <p>{details.description}</p>
      </section>

      <Footer/>


    </div>
   
  );
}

export default Home;

export async function getStaticProps(){
  const response = await fetch("http://localhost:8080/home")
  const data = await response.json()
  console.log(data);

  return{
    props:{details:data}
  }
}


