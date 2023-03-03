import Link from "next/link";


function Navbar(){
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/game">Games</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}

export default Navbar;