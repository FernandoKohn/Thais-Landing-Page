import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <a href="/Home">
                        <li>Euzinha</li>
                    </a>
                    <li>Números</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar