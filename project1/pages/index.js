import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function Home(){
  return(
    <div className="grid-container">
      <div className="content">
          <Navbar/>
          <main className="main-section">
            <h1>Home Page</h1>
          </main>
      </div>

      <Footer/>

    </div>
 
  );
}

export default Home;