import Logo from "../Layout/Logo"
import styles from "./Numeros.module.css"
import {Animated} from "react-animated-css";

function Numeros() {
    return (
        <div className={styles.numeros_container}>
            <Logo/>
            <div className={styles.conteudo}>
                <div className={styles.div1}>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                        <h1>Audiencia</h1>
                        <div className={styles.sexo}>
                            <p>Masculino</p>
                            <p>feminino</p>
                        </div>
                        <div className={styles.sexo_porcentagem}>
                            <p>80%</p>
                            <p>20%</p>
                        </div>
                    </Animated>
                </div>
                <div className={styles.div2}>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                        <h1>Idade</h1>
                        <div className={styles.idade}>
                            <p>13 - 17</p>
                            <p>18 - 24</p>
                            <p>25 - 34</p>
                        </div>
                        <div className={styles.idade_porcentagem}>
                            <p>7%</p>
                            <p>60%</p>
                            <p>33%</p>
                        </div>
                    </Animated>
                </div>
                <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                    <div className={styles.div3}>
                        <div className={styles.bloco}>
                            <h1>Instagram:</h1>
                            <span>
                                <p>51 mil seguidores</p>
                                <p>1k+ alcance histories</p>
                            </span>
                        </div>
                        <div className={styles.bloco}>
                            <h1>Youtube:</h1>
                            <span>
                                <p>98 mil seguidores (total)</p>
                            </span>
                        </div>
                        <div className={styles.bloco}>
                            <h1>TikTok:</h1>
                            <span>
                                <p>234 mil seguidores</p>
                            </span>
                        </div>
                        <div className={styles.bloco}>
                            <h1>Twitch:</h1>
                            <span>
                                <p>25 mil seguidores</p>
                            </span>
                        </div>
                    </div>
                </Animated>
            </div>
        </div>
    )
}

export default Numeros