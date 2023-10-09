import styles from "./HomeM.module.css"
import Logo from "../Layout/Logo"
import {Animated} from "react-animated-css";
import Linha from "../Layout/Linha"
function HomeM() {
    return (
        <div className={styles.home}>
             <section className={styles.one}>
                <Linha/>
                <h1>Thais Passos</h1>
                <p>Streamer - Youtuber - Tiktoker - Influenciadora  </p>
                <div className={styles.linha}>
                    
                </div>
                <img id={styles.foto} src={require("../../Fotos/thais2.png")} alt="Foto thais" />
             </section>
             <section className={styles.second}>
                
             </section>
        </div>
        
    )
}

export default HomeM

