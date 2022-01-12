import ListGroup from 'react-bootstrap/ListGroup' 
import Table from 'react-bootstrap/Table'
const RecipeList = ({recipes,openRecipeModal}) => {
    return (
        <>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Recipe Name</th>
                <th>Difficulty</th>
                <th>Cook Time (Minutes)</th>
                <th>Energy (kj)</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe)=>(
                   <tr>
                       <th onClick={()=>openRecipeModal(recipe)}>{recipe.name}</th>
                       <th>{recipe.difficulty}</th>
                       <th>{recipe.time} </th>
                       <th>{recipe.energy} </th>
                   </tr>
                    
                ))} 
            </tbody>
            </Table>
        </>
    )
}

export default RecipeList
