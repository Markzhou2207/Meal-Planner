import ListGroup from 'react-bootstrap/ListGroup' 
import Table from 'react-bootstrap/Table'
const RecipeList = ({recipes,editRecipe}) => {
    return (
        <>
            {/* <ListGroup>
                {recipes.map((recipe)=>(
                    <>
                          <ListGroup.Item>
                                <h4>{recipe.name}</h4>

                                
                          </ListGroup.Item>
                    </>
                    
                ))}
            </ListGroup> */}
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
                       <th onClick={()=>editRecipe(recipe)}>{recipe.name}</th>
                       <th>{recipe.difficulty}</th>
                       <th>{recipe.preparationTime} </th>
                       <th>{recipe.energy} </th>
                   </tr>
                    
                ))} 
            </tbody>
            </Table>
        </>
    )
}

export default RecipeList
