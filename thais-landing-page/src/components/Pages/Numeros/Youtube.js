import styles from "./Youtube.module.css"

function Youtube() {
    return (
        <div className={styles.conteudo}>
        <div className={styles.titulos}>
            <h1>Youtube</h1>
            <h2>@nixienaga</h2>
        </div>
        <div className={styles.dados}>
            <div className={styles.bloco}>
                <div className={styles.subBloco1}>
                    <h2>Seguidores</h2>
                    <h2 className={styles.segundoh2}>54 mil</h2>
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
        </div>
    </div>
    )
}

export default Youtube