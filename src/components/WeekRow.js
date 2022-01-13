import { useState,useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownMenu = ({day,meal,recipes}) => {
    const [days] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday'])
    
    
    return (
        <>
            <tr>
                             <th>{days[day]}</th>
                             <th>
                             <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'white', color:'black'}}  id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {recipes.map((recipe)=>(                               
                                    <Dropdown.Item href="#/action-1">{recipe.name}</Dropdown.Item>
                                    
                                ))} 
                                <Dropdown.Divider />
                                <Dropdown.Item style={{color:'red'}}href="#/action-1">Remove</Dropdown.Item>

                            </Dropdown.Menu>

                            </Dropdown>

                             </th>
            </tr>
        </>
    )
}

export default DropdownMenu
