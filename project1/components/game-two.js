import React, {useState} from 'react'

function GameTwo(){
    const [score,setScore] = useState(0)
    const [randomNumber,setRandomNumber] = useState(Math.floor(Math.random() *10)+1)

    const handleClick = () =>{
        console.log(`Init Random Number: ${randomNumber}`);
        const numberGuessed = Math.floor(Math.random() *10)+1
        console.log(`Number Guessed: ${numberGuessed}`);

        if(randomNumber === numberGuessed){
            setScore(score+1) //increment the score by 1 if there's a match
            setRandomNumber(Math.floor(Math.random() *10)+1) //reset init random number
        }
    }

    return(
        <div>
            <h2>Game Two</h2>
            <h3> Score {score}</h3>
            <button onClick={handleClick}>Guess Random Number</button>
        </div>
    );
}

export default GameTwo;