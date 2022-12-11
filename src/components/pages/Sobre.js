import React from "react"
import styles from "./sobre.module.css"
import imag from "./about-us.jpg"

function Sobre(){
    return(
        <section>
            <h2 className={styles.titulo}>Sobre-nós</h2>

            <div className={styles.sobre}>

                <div>
                    <img className={styles.imagem_sobre} src={imag} alt="sobre-nos" width={500} height={300}/>
                </div>
                <div>
                    <p className={styles.sobre_p}>A Nous Power é uma plataforma desde 2002, surge da percepção da necessidade do bem-estar para as empresas e colaboradores.

Onde será possível encontrar por profissionais comprometidos com o propósito na parte física e mental dos seus pacientes.</p>
                </div>
            </div>


        </section>
    )
}
export default Sobre

