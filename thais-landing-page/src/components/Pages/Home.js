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
                <div className={styles.about}>
                        <Linha/>
                        <h1>Thais Passos</h1>
                        <p>Streamer - Youtuber - Tiktoker - Influenciadora  </p>
                        <h2>Com um olho atento para as tendências e um toque de criatividade, meus números nas redes sociais estão sempre em ascensão. Estou em constante busca por novas maneiras de entreter meus seguidores, sempre mantendo um ambiente positivo e acolhedor. Uma criadora de conteúdo apaixonada e cheia de energia, com um sorriso no rosto mergulho de cabeça na criação de conteúdo em diversas plataformas como Instagram, Youtube, Tiktok e Twitch.</h2>
                        <div className={styles.ass}></div>                 
                </div>
            </div>
        </div>
    )
}

export default Home

