import { useState } from "react"
import styles from "./Instagram.module.css"
import {Animated} from "react-animated-css"

function Instagram() {

    var [likes, setLikes] = useState(false)
    var [isActive, setIsActive] = useState(0)
    var [after, setAfter] = useState(0)
    var [chat, setChat] = useState(false)
    
    function setZero() {
        setIsActive(0)
        setAfter(1)

    }

     function changeLikes() {
        setLikes(!likes)
    } 

    function chatToggler() {
        setChat(!chat)
    }

    return (
        <div className={styles.conteudo}>
            {chat && 
                <div className={styles.chat}>
                    <div className={styles.foto}></div>
                </div>
            }
            <Animated className={styles.likes} animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                <p><i id={styles.instalikes} onAnimationEnd={() => setZero()} onClick={() => {changeLikes(); setIsActive(1);}} 
                isActive={isActive} after={after} class='bx bxs-heart'></i>{!likes && 1.231}{likes && 1.232}</p>
                <p><i onClick={() => chatToggler()}  id={styles.instalikes2} class='bx bxs-message-rounded' ></i></p>
            </Animated>
            <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
                <div className={styles.titulos}>
                    <h1>Instagram</h1>
                    <h2 id={styles.arroba}>@Nixie____</h2>
                </div>
            </Animated>
            
                <Animated className={styles.dados} animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
                    <div className={styles.bloco}>
                        <div className={styles.subBloco1}>
                            <h2>Seguidores</h2>
                            <h2 className={styles.segundoh2}>50 mil</h2>
                        </div>
                        <div className={styles.subBloco2}>
                            <i id={styles.icon} class='bx bx-male'></i>
                        </div>
                    </div>
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
                            <h2 >1k média</h2>
                        </div>
                        <div className={styles.subBloco2}>
                            <i id={styles.icon} class='bx bx-happy-heart-eyes'></i>
                        </div>
                    </div>
                </Animated>
            
                <Animated className={styles.metaDados} animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                    <div className={styles.metaDados_1}>
                
                    </div>
                    <div className={styles.metaDados_2}>
                        <h2>Conteúdo <i>Life style</i> </h2>
                        <h2>Público abrangente</h2>
                        <a href="https://www.instagram.com/nixie____/"><i id={styles.link} class='bx bx-link-external'></i></a>
                    </div>
                </Animated>
        </div>
    )
}

export default Instagram