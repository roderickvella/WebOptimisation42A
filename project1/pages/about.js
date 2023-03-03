import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function About(){
  return(
    <div className="grid-container">
      <div className="content">
          <Navbar/>
          <main className="main-section">
            <h1>About Us</h1>
          </main>
      </div>

      <Footer/>

    </div>
 
  );
}

export default About;