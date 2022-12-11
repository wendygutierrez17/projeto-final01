import React from "react"
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.main}>

            <div>
                <Link><h3 className={styles.title}>Teste</h3></Link>
            </div>
            
            <div>
                <ul className={styles.nav_list}>
                    <li className={styles.list}><Link to="/" className={styles.link}>Início</Link></li>
                    <li className={styles.list}><Link to="/sobre" className={styles.link}>Sobre</Link></li>
                    <li className={styles.list}><Link to="/cadastro" className={styles.link}>Cadastre-se</Link></li>
                    <li className={styles.list}><Link to="/contato" className={styles.link}>Contato</Link></li>
                </ul>
            </div>
      </nav>
    )
}
export default Navbar

