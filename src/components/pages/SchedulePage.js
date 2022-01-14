import WeekPanel from '../WeekPanel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/button'
import PaginationBar from '../PaginationBar'
import { useState,useEffect } from 'react'
const SchedulePage = () => {
    const[mealPlan,setMealPlan]=useState([])
    const[recipes,setRecipes]=useState({})
    const[refresh,setRefresh] = useState(true)
    const[currentPage, setCurrentPage] = useState(1)
    const[weeksPerPage] = useState(10)



    //Variables needed for pagination
    const indexOfLastRecipe = currentPage * weeksPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - weeksPerPage;
    const currentMeals = mealPlan.slice(indexOfFirstRecipe,indexOfLastRecipe)
    
    //Change recipes displayed
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    //Addes recipes from json into the recipe list
    //refreshes with refreshRecipe value changes
    useEffect(()=>{
        const getPlan = async()=>{
            const res = await fetch('http://localhost:5000/plans')
            const data = await res.json()
            setMealPlan(data)
        }

        getPlan()
        console.log(mealPlan)
    },[refresh])
    
    useEffect(()=>{
        const getRecipes = async()=>{
            const res = await fetch('http://localhost:5000/recipes')
            const data = await res.json()
            let dictionary = Object.assign({},...data.map((x)=>({[x.id]:x.name})))
            setRecipes(dictionary)
        }

        getRecipes()
    },[])

    
    const addNewWeek = async()=>{
        console.log(mealPlan.length)
        var newPlan = mealPlan[mealPlan.length-1]
        var dateParts = newPlan.startDate.split("/");
        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        dateObject.setDate(dateObject.getDate()+7)
        var newDate = dateObject.toLocaleDateString("en-AU")
        newPlan.id++
        newPlan.startDate=newDate
        
        const res = await fetch(`http://localhost:5000/plans`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(newPlan)
        })
        setRefresh(prev=>!prev)

    }

    return (
        <div>
            <Container>
                <h1 style={{display:'inline-block'}}>Weekly Meal Plans</h1>
                <Button style={{display:'inline-block',float:'right',top:'50%'}} onClick={()=>addNewWeek()} variant='primary'>Add New Week</Button>{' '}
                {Object.entries(currentMeals).map(([id,plan])=>(                               
                        console.log(id+"   "+plan.id),
                        <WeekPanel mealPlan={plan} recipes={recipes} setRefresh={setRefresh}/>
                    ))} 
                <PaginationBar itemsPerPage={weeksPerPage} totalItems={mealPlan.length} paginate={paginate}></PaginationBar>

            </Container>
        </div>
    )
}

export default SchedulePage
