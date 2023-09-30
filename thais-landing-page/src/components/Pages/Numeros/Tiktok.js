import styles from "./Tiktok.module.css"
import { useState } from "react"
import {Animated} from "react-animated-css"; 

function Instagram() {

    var [showIframe, setshowIframe] = useState(false)

    return (
        <div className={styles.conteudo}>
            <div className={styles.videos}>
            </div>
                <Animated  animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                    <i onClick={() => setshowIframe(true)} class='bx bx-play'></i>
                </Animated>
            </div>

            {showIframe && <i id={styles.x} onClick={() => setshowIframe(false)} class='bx bx-x'></i>}

            {showIframe &&
             <iframe className={styles.iframe} src="https://www.tiktok.com/@nixienaga/video/7103951233160989957?lang=pt-BR" frameborder="0">
            </iframe>}

            <Animated className={styles.titulos} animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                <h1>Tiktok</h1>
                <h2 id={styles.arroba} >@nixienaga</h2>
            </Animated>

            <Animated className={styles.dados} animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Seguidores</h2>
                        <h2 className={styles.segundoh2}>210 mil</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bxl-tiktok'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Mulher</h2>
                        <h2 className={styles.segundoh2}>70%</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-female'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Homem</h2>
                        <h2 className={styles.segundoh2}>30%</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-male'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2 id={styles.H2grande}>Views média</h2>
                        <h2>130 mil </h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-bar-chart-alt-2'></i>
                    </div>
                </div>
            </Animated>

            <Animated className={styles.metaDados}  animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                <div className={styles.metaDados_1}>
                    
                </div>
                <div className={styles.metaDados_2}>
                    <h2> Vídeos de humor em casal </h2>
                    <h2>Ótimo enngagamento nos vídeos</h2>
                    <a target="_blank" href="https://www.instagram.com/nixie____/"><i id={styles.link} class='bx bx-link-external'></i></a>
                </div>
            </Animated>
        </div>
    )
}

export default Instagram