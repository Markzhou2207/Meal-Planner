import { useState,useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownMenu = ({day,meal,recipes,editMeal}) => {
    const [days] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday'])
    const [currMeal,setCurrMeal] = useState('')
    const changeMeal=async(meal) =>{
        editMeal(day,meal)
    }

    useEffect(()=>{
        if(meal){
             setCurrMeal(meal)
        } else {
            setCurrMeal("      ")
        }

    },[meal])
    return (
        <>
            <tr>
                             <th>{days[day]}</th>
                             <th>
                             <Dropdown onChange={(key)=>editMeal(key)}>
                            <Dropdown.Toggle style={{backgroundColor:'white', color:'black'}}  id="dropdown-basic">
                                {currMeal}
                            </Dropdown.Toggle>

                            <Dropdown.Menu onChange={(key)=>editMeal(key)}>
                                {/* {recipes.map((recipe)=>(                               
                                    <Dropdown.Item href="#/action-1">{recipe.name}</Dropdown.Item>
                                    
                                ))}  */}
                                {Object.entries(recipes).map(([id,name])=>(                               
                                    <Dropdown.Item onClick={()=>changeMeal({id})} key={id}>{name}</Dropdown.Item>
                                    
                                ))} 
                                <Dropdown.Divider />
                                <Dropdown.Item style={{color:'red'}} onClick={()=>changeMeal('')}>Remove</Dropdown.Item>

                            </Dropdown.Menu>

                            </Dropdown>

                             </th>
            </tr>
        </>
    )
}

export default DropdownMenu
