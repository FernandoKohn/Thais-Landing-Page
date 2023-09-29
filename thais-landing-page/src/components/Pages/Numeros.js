import { useState } from "react"
import Logo from "../Layout/Logo"
import styles from "./Numeros.module.css"
import Instagram from "./Numeros/Instagram"
import Tiktok from "./Numeros/Tiktok"
import Youtube from "./Numeros/Youtube"
function Numeros() {

    var [show, setShow] = useState(true)
    var [show2, setShow2] = useState(false)
    var [show3, setShow3] = useState(false)

    function mostrar1() {
        setShow(true)
        setShow2(false)
        setShow3(false)
    }

    function mostrar2() {
        setShow(false)
        setShow2(true)
        setShow3(false)
    }
    function mostrar3() {
        setShow(false)
        setShow2(false)
        setShow3(true)
    }

    return (
        <div className={styles.numeros_container}>
            <div className={styles.fundo2}></div>
            {<Logo />}
            {show && <Instagram/>}
            {show2 && <Tiktok/>}
            {show3 && <Youtube/>}
            <div className={styles.passar}>
                <p onClick={mostrar1}>1</p>
                <p onClick={mostrar2}>2</p>
                <p onClick={mostrar3}>3</p>
            </div>
        </div>
    )
}

export default Numeros