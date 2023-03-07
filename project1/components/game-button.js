import Link from "next/link"
import Image from "next/image"

function GameButton({id,image,alt}){
    return(
        <div>
            Test Game {id}
            <Image
                src={image}
                alt={alt}
                width={150}
                height={150}
            />
        </div>
    );
}

export default GameButton;
