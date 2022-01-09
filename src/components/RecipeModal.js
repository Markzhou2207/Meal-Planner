import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {useState} from 'react'
function RecipeModal({showModal, setShowModal}) {
    const[text,setText]=useState('')
    return (
        <>
            {showModal ? (
                <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>Create New Recipe</Modal.Title>
                </Modal.Header>
              
                <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Recipe Name"
                    className="mb-3"
                  >
                    <Form.Control type="text"/>
                  </FloatingLabel>
                  <hr />
                  <FloatingLabel id="ingredients" label='Ingredients'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                  <hr />
                  <FloatingLabel id="steps" label='Steps'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </FloatingLabel>
                  </Form.Group>
                  <div style={{float:'right'}}>
                    <Button style={{marginRight:'10px'}}onClick={()=>setShowModal(prev=> !prev)} variant="secondary">Close</Button>
                    <Button variant="primary">Save Recipe</Button>
                  </div>
                </Form>
                </Modal.Body>
              </Modal.Dialog>
            ):null}
        </>
    )
}

export default RecipeModal
