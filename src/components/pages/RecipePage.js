import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import RecipeModal from "../RecipeModal";
import {useState} from 'react';
import RecipeList from "../RecipeList";
import PaginationBar from "../PaginationBar";
function RecipePage() {
    const[showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    const[recipesPerPage] = useState(10)
    const[currentPage, setCurrentPage] = useState(1)


    const[recipes, setRecipes]=useState([
        {
            id:1,
            name:'Chicken Curry',
            ingredients:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam lorem in sodales cursus. Vivamus non quam vitae ipsum lacinia volutpat. Cras nec placerat ante. Nullam vitae leo ultrices, auctor sem ut, ullamcorper nunc. Mauris in massa orci. Suspendisse potenti. Vivamus fermentum augue vel eros tempor, vitae pulvinar dolor sagittis.",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:2,
            name:'Chicken Stew',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:3,
            name:'Pizza',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:4,
            name:'Chicken Pasta',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:5,
            name:'Beef Stew',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:6,
            name:'Turkey Sandwich',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:7,
            name:'Hot Pot',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:8,
            name:'Roast Lamb',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:9,
            name:'Chicken Wrap',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:10,
            name:'Lentil Stew',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
        {
            id:11,
            name:'Fried Chicken',
            ingredients:"3 Onions",
            steps:"1. Boil Chick, 2. Brown Beef",
            energy:'2899',
            fat:'28.5',
            carbohydrates:'41.3',
            protein:'12',
            sodium:'1226',
            preparationTime:'15',
            difficulty:'Easy'
        },
    ])


    
    //Variables needed for pagination
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    //Change recipes displayed
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //
    const[activeRecipe,setActiveRecipe] = useState('')
    //Adds/Edits Recipe
    const addRecipe = (recipe) =>{
        const id = recipes.length+1
        const newRecipe={id,...recipe}
        recipes.push(newRecipe)
    }
    const editRecipe = (recipe) =>{
        setActiveRecipe(recipe)
        setShowModal(prev=> !prev)
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
  