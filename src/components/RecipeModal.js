import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useState } from 'react'

const RecipeModal=({showModal, setShowModal,addRecipe,editRecipe,deleteRecipe,activeRecipe,setActiveRecipe}) =>{
    const[id, setId] = useState(0);
    const[name, setName] = useState('');
    const[ingredients,setIngredients]=useState('')
    const[steps,setSteps]=useState('')
    const[energy,setEnergy]=useState('0')
    const[time,setTime]=useState('0')
    const[fat,setFat]=useState('0')
    const[protein,setProtein]=useState('0')
    const[sodium,setSodium]=useState('0')
    const[carbs,setCarbs]=useState('0')
    const[difficulty,setDifficulty]=useState('')
    /*
      Returns the submitted form information to the onAdd method
    */
    const onSubmit=(e)=>{
      e.preventDefault()
      if(!activeRecipe){
        addRecipe({id,name,ingredients,steps,energy,fat,carbs,protein,sodium,time,difficulty})
      } else {
        editRecipe({id,name,ingredients,steps,energy,fat,carbs,protein,sodium,time,difficulty})
      }
      closeModal()
    }
    /*
      Calls the deleteRecipe function with the id to delete
    */
    const onDelete=()=>{
      if(activeRecipe){
        deleteRecipe(activeRecipe['id'])
      }
      closeModal()
    }
    /*
      Closes the modal and resets all the form data
    */
    const closeModal=()=>{
      setShowModal(prev=> !prev)
      setName('')
      setIngredients('')
      setSteps('')
      setEnergy('0')
      setTime('0')
      setFat('0')
      setProtein('0')
      setSodium('0')
      setCarbs('0')
      setDifficulty('0')
    }
    /*
      Styling for the information fields in the menu (Energy,Time,Fat,Protein,Sodium,Carbs)
    */
    const infoStyling={
      width:"49%",
      display:"inline-block",
      margin:"1px"
    }

    React.useEffect(()=>{
      if (activeRecipe) {
         setId(activeRecipe.id)
         setName(activeRecipe.name)
         setIngredients(activeRecipe.ingredients)
         setSteps(activeRecipe.steps)
         setEnergy(activeRecipe.energy)
         setTime(activeRecipe.time)
         setFat(activeRecipe.fat)
         setProtein(activeRecipe.protein)
         setSodium(activeRecipe.sodium)
         setCarbs(activeRecipe.carbohydrates)
         setDifficulty(activeRecipe.difficulty)
        console.log('updating modal recipes')
      }
    },[activeRecipe])





    return (
        <>
            {showModal ? (
                <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>Create New Recipe</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Recipe Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" value={name}
                    onChange={(e)=>setName(e.target.value)} required/>
                  </FloatingLabel>
                  <hr />
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Energy (kj)"
                    style={infoStyling}
                  >
                    <Form.Control type="text" value={energy}
                    onChange={(e)=>setEnergy(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Cook Time"
                    style={infoStyling}

                  >
                    <Form.Control type="text" value={time}
                    style={{display:"inline"}}
                    onChange={(e)=>setTime(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Fat"
                    style={infoStyling}

                  >
                    <Form.Control type="text" value={fat}
                    onChange={(e)=>setFat(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Carbohydrates"
                    style={infoStyling}

                  >
                    <Form.Control type="text" value={carbs}
                    style={{display:"inline"}}
                    onChange={(e)=>setCarbs(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Protein"
                    style={infoStyling}

                  >
                    <Form.Control type="text" value={protein}
                    style={{display:"inline"}}
                    onChange={(e)=>setProtein(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Sodium"
                    style={infoStyling}

                  >
                    <Form.Control type="text" value={sodium}
                    style={{display:"inline"}}
                    onChange={(e)=>setSodium(e.target.value)}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Difficulty"
                  >
                    <Form.Control type="text" value={difficulty}
                    style={{display:"inline"}}
                    onChange={(e)=>setDifficulty(e.target.value)}/>
                  </FloatingLabel>
                  <hr />
                  <FloatingLabel id="ingredients" label='Ingredients'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      value={ingredients}
                      onChange={(e)=>setIngredients(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                  <hr />
                  <FloatingLabel id="steps" label='Steps'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      value={steps}
                      onChange={(e)=>setSteps(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                  </Form.Group>
                  <div style={{float:'right'}}>
                    <Button style={{marginRight:'10px'}}onClick={()=>onDelete()} variant="danger">Delete</Button>
                    <Button style={{marginRight:'10px'}}onClick={()=>closeModal()} variant="secondary">Close</Button>
                    <Button variant="primary" type='submit'>Save Recipe</Button>
                  </div>
                </Form>
                </Modal.Body>
              </Modal.Dialog>
            ):null}
        </>
    )
}

export default RecipeModal
