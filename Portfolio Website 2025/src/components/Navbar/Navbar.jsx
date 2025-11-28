import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/" className="button">Home</Link>
                </li>
                <li>
                    <Link to={"/About"} className="button">About</Link>
                </li>
                <li>
                    <Link to={"/Projects"} className="button">Projects</Link>
                </li>
                <li>
                    <Link to={"/Contact"} className="button">Contact</Link>
                </li>       
            </ul>
        </div>
    )
}

export default Navbar