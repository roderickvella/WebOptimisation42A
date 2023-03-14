import React, {useState} from 'react'

function GameOne(){
    const [score, setScore] = useState(0)

    const handleClick = () =>{
        setScore(score+1)
    }

    return(
        <div>
            <h2>Game One</h2>
            <h3>Score: {score}</h3>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default GameOne;