import Link from "next/link"
import Image from "next/image"

function GameButton({ id, image, alt }) {
    return (
        // <div>
        //     Test Game {id}
        //     <Image
        //         src={image}
        //         alt={alt}
        //         width={150}
        //         height={150}
        //     />
        // </div>
        <div className="game-grid-item">
            <Link href={`/game/${id}`}>
                <div className="container">
                    <Image
                        src={image}
                        alt={alt}
                        width={150}
                        height={150}
                        className="image"
                    />
                    <div className="middle">
                        <div className="text">Play</div>
                    </div>
                </div>
            </Link>
        </div>



    );
}

export default GameButton;
