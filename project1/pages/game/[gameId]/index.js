import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {useRouter} from "next/router";
import GameOne from "@/components/game-one";
import GameTwo from "@/components/game-two";

function GameSession(){

    const router = useRouter();
    const gameId = router.query.gameId;

    let game;
    if(gameId === "1"){
        game = <GameOne/>
    }
    else if(gameId==="2"){
        game = <GameTwo/>
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