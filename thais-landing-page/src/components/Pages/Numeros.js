import { useState } from "react"
import Logo from "../Layout/Logo"
import styles from "./Numeros.module.css"
import Instagram from "./Numeros/Instagram"
import Tiktok from "./Numeros/Tiktok"
import Youtube from "./Numeros/Youtube"
function Numeros() {

    var [show, setShow] = useState(<Instagram/>)

    function handleChangeRight() {
        switch (show) {
            case (<Instagram/>):
                setShow(<Tiktok/>);
                break;
            case (<Tiktok/>):
                setShow(<Youtube/>);
                break;
            case (<Youtube/>):
                setShow(<Instagram/>);
                break;
        }
        
    }

    return (
        <div className={styles.numeros_container}>
            <div className={styles.fundo2}></div>
            {<Logo />}
            {show}
            <div className={styles.passar}>
                <i className='bx bx-chevron-left' ></i>
                <p> | </p>
                <i onClick={handleChangeRight} className='bx bx-chevron-right'></i>
            </div>
        </div>
    )
}

export default Numeros