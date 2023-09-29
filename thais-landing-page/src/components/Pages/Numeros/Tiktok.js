import styles from "./Tiktok.module.css"
import { TikTok } from "react-tiktok";

function Instagram() {
    return (
        <div className={styles.conteudo}>
            <div className={styles.videos}>
                <i class='bx bx-play'></i>
            </div>
            <div className={styles.video_play}>
                
            </div>
            <div className={styles.titulos}>
                <h1>Tiktok</h1>
                <h2>@nixienaga</h2>
            </div>
            <div className={styles.dados}>
                <div className={styles.bloco}>
                    <div className={styles.subBloco1}>
                        <h2>Seguidores</h2>
                        <h2 className={styles.segundoh2}>234 mil</h2>
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
            </div>
        </div>
    )
}

export default Instagram