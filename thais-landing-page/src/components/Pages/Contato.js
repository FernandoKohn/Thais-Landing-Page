import styles from "./Contato.module.css"
import Linha from "../Layout/Linha"
import Logo from "../Layout/Logo"
import { Animated } from "react-animated-css";
import { useState } from "react";

function Contato() {

    var [isCopy, setIscopy] = useState(false)
    var [estilo, setEstilo] = useState(styles.h1forte)
    var [estilo2, setEstilo2] = useState(styles.padding)
    var [copiado, setCopiado] = useState("Contato!")

    function copy() {
        if (isCopy == true) {
            setIscopy(false)
            setEstilo(styles.h1forte)
            setEstilo2(styles.padding)
        } else {
            navigator.clipboard.writeText("contatonixie23@gmail.com")
            setEstilo(styles.h1forte2)
            setEstilo2(styles.padding_green_border)
            setCopiado("Copiado!")
        }
    }


    return (
        <Animated className={styles.container} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Logo />
            <div className={styles.conteudo}>
                <div className={styles.div1}>
                    <h1>Entre</h1>
                    <h1>agora em</h1>
                </div>
                <div className={estilo2} onClick={copy} >
                    <h1>Contato!</h1>
                    <h1 id={estilo}>{copiado}</h1>
                </div>
                <Animated className={styles.metaDados} animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                <div className={styles.metaDados_2}>
                    <h2>Clique para copiar!</h2>
                    <h2>contatonixie23@gmail.com</h2>
                </div>
                <div className={styles.metaDados_1}>                  
                </div>
            </Animated>
            </div>
        </Animated>
    )
}

export default Contato