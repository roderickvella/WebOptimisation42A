import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function GamesList(){
  return(
    <div className="grid-container">
      <div className="content">
          <Navbar/>
          <main className="main-section">
            <h1>Games List</h1>
          </main>
      </div>

      <Footer/>

    </div>
 
  );
}

export default GamesList;