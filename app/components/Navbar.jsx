import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo.png'

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Ticketer Logo"
                width={60}
                quality={100}
                placeholder='blur'

            />
            <h1>Ticketer</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}