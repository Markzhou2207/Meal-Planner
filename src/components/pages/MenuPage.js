import WeekPanel from '../WeekPanel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/button'
import PaginationBar from '../PaginationBar'
import { useState,useEffect } from 'react'

const MenuPage = () => {
    const[menus,setMenus]=useState([])
    const[recipes,setRecipes]=useState({})
    const[refresh,setRefresh] = useState(true)
    const[currentPage, setCurrentPage] = useState(1)
    const[weeksPerPage] = useState(10)



    //Variables needed for pagination
    const indexOfLastWeek = currentPage * weeksPerPage;
    const indexOfFirstWeek = indexOfLastWeek - weeksPerPage;
    const currentWeeks = menus.slice(indexOfFirstWeek,indexOfLastWeek)
    
    //Changes which page of meals to be displayed
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    //Addes recipes from json into the recipe list
    //refreshes with refreshRecipe value changes
    useEffect(()=>{
        const getMenus = async()=>{
            const res = await fetch('http://localhost:5000/plans')
            const data = await res.json()
            setMenus(data)
        }

        getMenus()
    },[refresh])
    

    //Fetches all the recipes from the json server
    // Stores the results in a dictionary for mapping with  
    //key: recipe ID 
    //value: recipe name 
    useEffect(()=>{
        const getRecipes = async()=>{
            const res = await fetch('http://localhost:5000/recipes')
            const data = await res.json()
            let dictionary = Object.assign({},...data.map((x)=>({[x.id]:x.name})))
            setRecipes(dictionary)
        }

        getRecipes()
    },[])

    // Creates a new week for the calendar using the furtherest one as a template
    // Sends POST request with new entry to the json server
    const addNewMenu = async()=>{
        console.log(menus.length)
        var newWeek = menus[menus.length-1]
        var dateParts = newWeek.startDate.split("/");
        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
        dateObject.setDate(dateObject.getDate()+7)
        var newDate = dateObject.toLocaleDateString("en-AU")
        newWeek.id++
        newWeek.startDate=newDate
        
        await fetch(`http://localhost:5000/plans`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(newWeek)
        })
        setRefresh(prev=>!prev)

    }

    return (
        <div>
            <Container>
                <h1 style={{display:'inline-block'}}>Weekly Meal Plans</h1>
                <Button style={{display:'inline-block',float:'right',top:'50%'}} onClick={()=>addNewMenu()} variant='primary'>Add New Week</Button>{' '}
                {Object.entries(currentWeeks).map(([id,plan])=>(     
                        <WeekPanel key={id} menu={plan} recipes={recipes} setRefresh={setRefresh}/>
                    ))} 
                <PaginationBar itemsPerPage={weeksPerPage} totalItems={menus.length} paginate={paginate}></PaginationBar>

            </Container>
        </div>
    )
}

export default MenuPage
