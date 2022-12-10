import React from "react"
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

function Footer() {
    return(
        <footer className={styles.footer}>

    <div>
        <h5 className={styles.rtitle}>Redes Sociais:</h5>
    <ul className={styles.rsociais}>
        <li className={styles.itens}><FaGithub className={styles.link} /></li>
        <li className={styles.itens}><FaInstagram className={styles.link}/></li>
        <li className={styles.itens}><FaFacebook className={styles.link} /></li>
        <li className={styles.itens}><FaLinkedin className={styles.link} /></li>
    </ul>

    </div>
    <div>
    <p className={styles.copy_1}>Desenvolvido por: Nous Power</p>
    <p className={styles.copy}>Copyright &copy;2022</p>
    </div>
</footer>
    )
}
export default Footer 