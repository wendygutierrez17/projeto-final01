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
                    <p className={styles.sobre_p}>A Nous Power surge da percepção da necessidade do bem-estar para as empresas e colaboradores.

Onde será possível encontrar por profissionais comprometidos com a parte física e mental com o bem-estar dos seus pacientes, unindo profissionais que se dedicam a este propósito.</p>
                </div>
            </div>


        </section>
    )
}
export default Sobre

