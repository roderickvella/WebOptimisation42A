import Nav from "../components/Nav"
import Footer from "../components/Footer"

function Home({ details }) {
  return (
    <div>
      <Nav/>

      <header className="header">
        <h1>Welcome to my website</h1>
        <p>This is the home page</p>
      </header>

      <section className="section">
        <h2>Header Two</h2>
        <p>some description goes over here</p>
      </section>

      <Footer/>


    </div>
   
  );
}

export default Home;


