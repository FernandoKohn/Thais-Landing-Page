import styles from "./Tiktok.module.css"
import { useState } from "react"
import {Animated} from "react-animated-css"; 

function Instagram() {

    var [showIframe, setshowIframe] = useState(false)
    var [changeColor, setChangecolor] = useState(styles.titulos)
    var [changeColorArrob, setChangecolorarroba] = useState(styles.arroba)
    function handleClickOn() {
        setshowIframe(true) 
        setChangecolor(styles.titulosBlack)
        setChangecolorarroba(styles.arroba2)
    }


    function handleClickOff() {
        setshowIframe(false) 
        setChangecolor(styles.titulos)
        setChangecolorarroba(styles.arroba)
    }

    return (
        <div className={styles.conteudo}>
            <div className={styles.videos}>
                <Animated  animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                    <i onClick={handleClickOn} class='bx bx-play'></i>
                </Animated>
            </div>
            
            {showIframe && <i id={styles.x} onClick={handleClickOff} class='bx bx-x'></i>}

            {showIframe &&
             <iframe className={styles.iframe} src="https://www.tiktok.com/embed/7103951233160989957" frameborder="0">
            </iframe>}

            <Animated className={changeColor} animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                <h1>TikTok</h1>
                <h2 id={changeColorArrob} >@nixienaga</h2>
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
                    <h2>Humor em casal </h2>
                    <h2>Ótimo enngagamento</h2>
                    <a target="_blank" href="https://www.instagram.com/nixie____/"><i id={styles.link} class='bx bx-link-external'></i></a>
                </div>
            </Animated>
        </div>
    )
}

export default Instagram