import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Números">Números</Link>
                    <Link to="/Contato">Contato</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar