import styles from "./Logo.module.css"
import {Animated} from "react-animated-css";

function Logo() {
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className={styles.logo}>
                <a href="/"><img src={require('../../Fotos/nix-exe.png')}  alt="Logo" /></a>
            </div>
        </Animated>
    )
}

export default Logo