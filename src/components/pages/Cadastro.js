import React from "react"
import Form from 'react-bootstrap/Form';
import styles from "./formulario.module.css"
import Button from 'react-bootstrap/Button';

function Cadastro(){
    return(
            
        <div className={styles.cadastro}>
            <h2>Cadastre-se</h2>
             <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome aqui" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" />
      </Form.Group>
    

    <Button variant="outline-primary" type= "submit" >Enviar</Button>{' '}
    </Form>
    </div> 
         
        
    )
}
export default Cadastro

