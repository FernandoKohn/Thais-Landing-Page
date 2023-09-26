import styles from "./Contato.module.css"
import Linha from "../Layout/Linha"
import Logo from "../Layout/Logo"

function Contato() {
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.conteudo}>
                <Linha/>
                <h1>Entre em contato!</h1> 
            </div>
        </div>
    )
}

export default Contato