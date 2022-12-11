import React from "react"
import styles from "./sobre.module.css"
import image from "./about-us.jpg"

function Sobre() {
    return(
        <section>
        <h2 className={styles.titulo}>Sobre-nós</h2>
        <div>
                <img className={styles.imagem_sobre} src={image} alt="sobre-nos" width={500} height={300}/>
            </div>
                <div>
                <h3 className={styles.sobre_h}>Sobre-nos</h3>
                <p className={styles.sobre_p}> A Nous Power surge da percepção da necessidade do bem-estar para as empresas e colaboradores.

Onde será possível encontrar por profissionais comprometidos com a parte física e com o bem-estar dos seus pacientes, unindo as variadas áreas profissionais que se dedicam a este propósito.</p>
            </div>
       
    


    </section>
)
}
export default Sobre