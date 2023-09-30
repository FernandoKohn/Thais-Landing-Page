import styles from "./Youtube.module.css"
import { useState } from "react"
import {Animated} from "react-animated-css";

function Youtube() {

    var [showIframe, setshowIframe] = useState(false)



    return (
        <div className={styles.conteudo}>
            <Animated className={styles.titulos} animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                <h1>Youtube</h1>
                <h2 id={styles.arroba} >@nixienaga</h2>
            </Animated>

            <Animated className={styles.videos} animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                <i onClick={() => setshowIframe(true)} class='bx bx-play'></i>
            </Animated>

            {showIframe && <i id={styles.x} onClick={() => setshowIframe(false)} class='bx bx-x'></i>}

            {showIframe &&  
            <iframe className={styles.iframe} src="https://www.youtube.com/watch?v=LvRCjGcqZqk&ab_channel=NixieeNaga" frameborder="0">
            </iframe>}
           

            
            <Animated className={styles.dados} animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Seguidores</h2>
                        <h2 className={styles.segundoh2}>50 mil</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bxl-youtube'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Homem</h2>
                        <h2 className={styles.segundoh2}>80%</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-male'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Mulher</h2>
                        <h2 className={styles.segundoh2}>20%</h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-female'></i>
                    </div>
                </div>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2 id={styles.H2grande}>Views / mês</h2>
                        <h2>210 mil ~ </h2>
                    </div>
                    <div className={styles.subBloco2}>
                        <i id={styles.icon} class='bx bx-bar-chart-alt-2'></i>
                    </div>
                </div>
            </Animated>
            <Animated className={styles.metaDados} animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                <div className={styles.metaDados_1}>
                    
                </div>
                <div className={styles.metaDados_2}>
                    <h2>React em casal</h2>
                    <h2>Público geek</h2>
                    <a target="_blank" href="https://www.instagram.com/nixie____/"><i id={styles.link} class='bx bx-link-external'></i></a>
                </div>
            </Animated>
        </div>
    )
}

export default Youtube