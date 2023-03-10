import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {useRouter} from "next/router";

function GameSession(){

    const router = useRouter();
    const gameId = router.query.gameId;

    let game;
    if(gameId === "1"){
        game = <h2>Render Game 1</h2>
    }
    else if(gameId==="2"){
        game = <h2>Render Game 2</h2>
    }
    else{
        game = <h2>Game not yet developed</h2>
    }


  return(
    <div className="grid-container">
      <div className="content">
          <Navbar/>
          <main className="main-section">
            <h1>Game Details of Game ID: {gameId} </h1>
            {game}
          </main>
      </div>

      <Footer/>

    </div>
 
  );
}

export default GameSession;