import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <a href="/">
                        <li>Sobre</li>
                    </a>
                    <a href="/Números">
                        <li>Números</li>
                    </a>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar