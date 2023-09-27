import Logo from "../Layout/Logo"
import styles from "./Numeros.module.css"


function Numeros() {
    return (
        <div className={styles.numeros_container}>
            <div className={styles.fundo2}></div>
            <Logo />
            <div className={styles.conteudo}>
                <div className={styles.titulos}>
                    <h1>Instagram</h1>
                    <h2>@Nixie____</h2>
                </div>
                <div className={styles.dados}>
                        <div className={styles.bloco}>
                            <div className={styles.subBloco1}>
                                <h2>Homem</h2>
                                <h2 className={styles.segundoh2}>78%</h2>
                            </div>
                            <div className={styles.subBloco2}>
                                <i id={styles.icon} class='bx bx-male'></i>
                            </div>
                        </div>
                        <div className={styles.bloco}>
                            <div className={styles.subBloco1}>
                                <h2>Mulher</h2>
                                <h2 className={styles.segundoh2}>22%</h2>
                            </div>
                            <div className={styles.subBloco2}>
                                <i id={styles.icon} class='bx bx-female'></i>
                            </div>
                        </div>
                        <div className={styles.bloco}>
                            <div className={styles.subBloco1}>
                                <h2>Idade</h2>
                                <h2 className={styles.segundoh2}>13-34</h2>
                            </div>
                            <div className={styles.subBloco2}>
                                <i id={styles.icon} class='bx bx-cake'></i>
                            </div>
                        </div>
                        <div className={styles.bloco}>
                            <div className={styles.subBloco1}>
                                <h2>Histories</h2>
                                <h2 className={styles.histories}>1.1k view</h2>
                            </div>
                            <div className={styles.subBloco2}>
                                <i id={styles.icon} class='bx bx-happy-heart-eyes'></i>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Numeros