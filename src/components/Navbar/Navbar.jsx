import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <h1><Link to="/Portfolio-Website-2025/" className="button">Joshua Kroft</Link></h1>
            <ul className="nav-links">
                <li>
                    <Link to="/Portfolio-Website-2025/" className="button">Home</Link>
                </li>
                <li>
                    <Link to={"/Portfolio-Website-2025/About"} className="button">About</Link>
                </li>
                <li>
                    <Link to={"/Portfolio-Website-2025/Projects"} className="button">Projects</Link>
                </li>
                <li>
                    <Link to={"/Portfolio-Website-2025/Contact"} className="button">Contact</Link>
                </li>       
            </ul>
        </nav>
    )
}

export default Navbar