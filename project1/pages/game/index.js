import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GameButton from "@/components/game-button";

import image1 from "public/images/image1.png";
import image2 from "public/images/image2.svg";
import image3 from "public/images/image3.svg";
import image4 from "public/images/image4.svg";
import image5 from "public/images/image5.png";
import image6 from "public/images/image6.svg";


function GamesList(){
  return(
    <div className="grid-container">
      <div className="content">
          <Navbar/>
          <main className="main-section">
            <h1>Games List</h1>
            <div className="game-grid-container">
              <GameButton id="1" image={image1} alt="Image 1"/>
              <GameButton id="2" image={image2} alt="Image 2" />
              <GameButton id="3" image={image3} alt="Image 3"/>
              <GameButton id="4" image={image4} alt="Image 4"/>
              <GameButton id="5" image={image5} alt="Image 5"/>
              <GameButton id="6" image={image6} alt="Image 6"/>
            </div>
          </main>
      </div>

      <Footer/>

    </div>
 
  );
}

export default GamesList;