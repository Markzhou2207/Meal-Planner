import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import WeekRow from './WeekRow'
import { useEffect,useState } from 'react'
const WeekPanel = ({mealPlan,recipes,setRefresh}) => {
    const [mondayMeal, setMondayMeal] = useState('')

    const [meals,setMeals] = useState(['','','','',''])
    let mealArray=['','','','','']
    useEffect(()=>{
        const mapMealName = async()=>{
            var arr=['','','','','']
            if(recipes && mealPlan){
                for(let i=0;i<5;i++){
                    arr[i]=recipes[mealPlan.meals[i]]
                    mealArray[i]=recipes[mealPlan.meals[i]]
                }
            }
            setMeals(arr)
        }
        mapMealName()
    },[recipes,mealPlan])


    
    const editMeal = async(day,meal) =>{
        mealPlan.meals[day]=meal.id
        const res = await fetch(`http://localhost:5000/plans/${mealPlan.id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(mealPlan)
        })
        setRefresh(prev=>!prev)

    }


    


    return (
        <div>
            {mealPlan ? (
             <Accordion defaultActiveKey="0">
             <Accordion.Item eventKey="0">
                 <Accordion.Header>Week: {mealPlan.startDate}</Accordion.Header>
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
                            <WeekRow day={id} meal={name} recipes={recipes} editMeal={editMeal}/>
                                ))} 
                     </tbody>
                
                 </Table>
                 </Accordion.Body>
             </Accordion.Item>
             </Accordion>
            ):null}
        </div>
    )
}

export default WeekPanel
