import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.home}>
            <a href="/home"><img src={require('../../Fotos/nix-exe.png')}  alt="Logo" /></a>
            <div className={styles.homeContent}>
                <div className={styles.foto}>
                    
                </div>
            </div>
        </div>
    )
}

export default Home

