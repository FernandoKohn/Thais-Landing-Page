import styles from "./Home.module.css"
import Logo from "../Layout/Logo"
import {Animated} from "react-animated-css";
import Linha from "../Layout/Linha"
function Home() {
    return (
        <div className={styles.home}>
            
            <Logo />
            <div className={styles.homeContent}>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <div className={styles.foto}></div>
                </Animated>
                <Animated  className={styles.about} animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <Linha/>
                        <h1>Thais Passos</h1>
                        <p>Streamer - Youtuber - Tiktoker - Influenciadora  </p>
                        <h2>Com um olho atento para as tendências e um toque de criatividade, meus números nas redes sociais estão sempre em ascensão. Estou em constante busca por novas maneiras de entreter meus seguidores, sempre mantendo um ambiente positivo e acolhedor. Uma criadora de conteúdo apaixonada e cheia de energia, com um sorriso no rosto mergulho de cabeça na criação de conteúdo em diversas plataformas como <span className={styles.links}><a target="_blank" href="https://www.instagram.com/nixie____/">Instagram</a></span>, <spann className={styles.links}><a target="_blank" href="https://www.youtube.com/@Nixienaga">Youtube</a></spann>, <span className={styles.links}><a target="_blank" href="https://www.tiktok.com/@nixienaga?lang=pt-BR">Tiktok</a></span> e <span className={styles.links}><a target="_blank" href="https://www.twitch.tv/nixie_e">Twitch</a></span>.</h2>
                        <div className={styles.ass}></div>
                    </div>
                </Animated>
            </div>
        </div>
    )
}

export default Home

