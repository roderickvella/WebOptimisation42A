import Link from 'next/link'

function Nav(){
    return(
        <nav className="navigation">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact Us</Link>

        </nav>
    )
}

export default Nav