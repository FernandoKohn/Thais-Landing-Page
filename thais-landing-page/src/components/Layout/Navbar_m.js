import styles from "./Navbar_m.module.css"

function NavbarM() {
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
                    <a href="/Contato">
                        <li>Contato</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarM