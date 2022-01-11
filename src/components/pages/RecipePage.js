import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import RecipeModal from "../RecipeModal";
import {useState, useEffect} from 'react';
import RecipeList from "../RecipeList";
import PaginationBar from "../PaginationBar";
function RecipePage() {
    const[showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    const[recipesPerPage] = useState(10)
    const[currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        const getRecipes = async()=>{
            const recipesFromServer = await fetchRecipes()
            setRecipes(recipesFromServer)
        }

        getRecipes()
    },[])

    // Fetches recipes from JSON
    const fetchRecipes= async()=>{
        const res = await fetch('http://localhost:5000/recipes')
        const data = await res.json()
        return data
    }
    const[recipes, setRecipes]=useState([])


    
    //Variables needed for pagination
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    //Change recipes displayed
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //
    const[activeRecipe,setActiveRecipe] = useState('')
    //Adds/Edits Recipe
    const addRecipe = async(recipe) =>{
        // const id = recipes.length+1
        // const newRecipe={id,...recipe}
        // recipes.push(newRecipe)
        const res = await fetch('http://localhost:5000/recipes',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()

        setRecipes([...recipes,data])

    }

    //Delete Recipe
    const deleteRecipe= async(id)=>{
        await fetch('http://localhost:5000/recipes/${id}',{
            method:'DELETE',
        })
    }

    //
    const editRecipe = async(recipe) =>{
        
        const res = await fetch('http://localhost:5000/recipes/${recipe[id]}',{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()

        setRecipes([...recipes,data])

    }
    return (
        <>
            <Container>
            <div>
                <h1 style={{display:'inline-block'}}>Recipes</h1>
                <Button onClick={openModal} style={{display:'inline-block',float:'right',top:'50%'}} variant='primary'>Create New</Button>{' '}
                <RecipeModal showModal={showModal} setShowModal={setShowModal} onAdd={addRecipe} recipe={activeRecipe}/>
                <RecipeList recipes={currentRecipes} editRecipe={editRecipe}/>
                <PaginationBar recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate}></PaginationBar>
            </div>
            </Container>
        </>
    );
  }
  
  export default RecipePage;
  