import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import WeekRow from './WeekRow'
import { useEffect,useState } from 'react'
const WeekPanel = ({menu,recipes,setRefresh}) => {

    const [meals,setMeals] = useState(['','','','',''])

    useEffect(()=>{
        const mapMealName = async()=>{
            var arr=['','','','','']
            if(recipes && menu){
                for(let i=0;i<5;i++){
                    arr[i]=recipes[menu.meals[i]]
                }
            }
            setMeals(arr)
        }
        mapMealName()
    },[recipes,menu])


    
    const editMeal = async(day,meal) =>{
        menu.meals[day]=meal.id
        await fetch(`http://localhost:5000/plans/${menu.id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(menu)
        })
        setRefresh(prev=>!prev)

    }


    


    return (
        <>
            {menu ? (
             <Accordion role='weekPanel' key={menu.startDate}>
             <Accordion.Item>
                 <Accordion.Header>Week: {menu.startDate}</Accordion.Header>
                 <Accordion.Body>
                 <Table striped bordered hover>
                     <thead>
                         <tr>
                         <th>Day</th>
                         <th>Meal</th>
                         </tr>
                     </thead>
                     <tbody>
                        {Object.entries(meals).map(([id,name])=>(                               
                            <WeekRow key={id} day={id} meal={name} recipes={recipes} editMeal={editMeal}/>
                                ))} 
                     </tbody>
                
                 </Table>
                 </Accordion.Body>
             </Accordion.Item>
             </Accordion>
            ):null}
        </>
    )
}

export default WeekPanel
