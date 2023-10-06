import styles from "./Pagination.module.css"

function Pagination() {
    return (
        <div className={styles.pagination}>
            <div>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/Nixie____"><i class='bx bxl-instagram-alt'></i></a>
            </div>
            <div>
                <a target='_blank' rel="noreferrer" href="https://www.youtube.com/@Nixienaga/videos"><i class='bx bxl-youtube' ></i></a>
            </div>
            <div>
                <a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@nixienaga?lang=pt-BR"><i class='bx bxl-tiktok'></i></a>
            </div>
        </div>
    )
}

export default Pagination