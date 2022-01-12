import WeekPanel from '../WeekPanel'
import Container from 'react-bootstrap/Container'
import { useState,useEffect } from 'react'
const SchedulePage = () => {
    const[schedule,setSchedule]=useState('')
    
    //Addes recipes from json into the recipe list
    //refreshes with refreshRecipe value changes
    useEffect(()=>{
        const getPlan = async()=>{
            const res = await fetch('http://localhost:5000/plans')
            const data = await res.json()
            setSchedule(data)
        }

        getPlan()
    },[])

    return (
        <div>
            <Container>
                <h1>Weekly Meal Plans</h1>
                <WeekPanel schedule={schedule}/>
            </Container>
        </div>
    )
}

export default SchedulePage
