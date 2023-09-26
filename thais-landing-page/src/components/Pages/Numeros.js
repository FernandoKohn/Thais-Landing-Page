import Logo from "../Layout/Logo"
import styles from "./Numeros.module.css"
import { Animated } from "react-animated-css";

function Numeros() {
    return (
        <div className={styles.numeros_container}>
            <div className={styles.fundo2}></div>
            <Logo />
            <div className={styles.conteudo}>
                <div className={styles.titulos}>
                    <h1>Instagram</h1>
                    <h2>Números</h2>
                </div>
                <div className={styles.dados}>
                        <div className={styles.dados_info}>
                            <h2>Homem</h2>
                            <h2>78%</h2>
                        </div>
                        <div className={styles.bola}>
                            <h2></h2>
                        </div>
                        <div className={styles.dados_info}>
                            <h2>Mulher</h2>
                            <h2>22%</h2>
                        </div>
                        <div className={styles.bola}>
                            <h2></h2>
                        </div>
                        <div className={styles.dados_info}>
                            <h2>Faixa etária</h2>
                            <h2>13 - 34</h2>
                        </div>
                        <div className={styles.bola}>
                            <h2></h2>
                        </div>
                        <div className={styles.dados_info}>
                            <h2>Média dos histories</h2>
                            <h2>1.2k views</h2>
                        </div>
                        <div className={styles.bola}>
                            <h2></h2>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Numeros