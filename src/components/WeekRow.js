import { useState,useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const WeekRow = ({day,meal,recipes,editMeal}) => {
    const [days] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday'])
    const [currMeal,setCurrMeal] = useState('')
    const changeMeal=async(meal) =>{
        editMeal(day,meal)
    }

    useEffect(()=>{
        const updateCurrentMeal=()=>{
            if(meal){
                setCurrMeal(meal)
           } else {
               setCurrMeal("")
           }
        }

        updateCurrentMeal()

    },[meal])
    return (
        <>
            <tr role="dayRow">
                <th role="day" style={{width:'50%'}}>{days[day]}</th>
                <th role="meal" style={{width:'50%'}}>
                    <Dropdown>
                    <Dropdown.Toggle style={{backgroundColor:'white', color:'black',minWidth:"200px"}} >
                        {currMeal}
                    </Dropdown.Toggle>

                    <Dropdown.Menu role='dropdownMenu'>
                        {Object.entries(recipes).map(([id,name])=>(                               
                            <Dropdown.Item onClick={()=>changeMeal({id})} key={id} role='dropdownOption'>{name}</Dropdown.Item>
                        ))} 
                        <Dropdown.Divider />
                        <Dropdown.Item style={{color:'red'}} onClick={()=>changeMeal('')} key={0} role='dropdownOption'>Remove</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </th>
            </tr>
        </>
    )
}

export default WeekRow
