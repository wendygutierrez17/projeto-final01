import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Cadastro(){
    return(
            
        <div><h2>Cadastre-se</h2>
             <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome aqui" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" />
      </Form.Group>
    </Form>

    <Button>
    <Button variant="outline-primary">Envio</Button>{' '}
    </Button>
    </div> 

         
        
    )
}
export default Cadastro

