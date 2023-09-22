import styles from "./Logo.module.css"

function Logo() {
    return (
        <div className={styles.logo}>
            <a href="/"><img src={require('../../Fotos/nix-exe.png')}  alt="Logo" /></a>
        </div>
    )
}

export default Logo