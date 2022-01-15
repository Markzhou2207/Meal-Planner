import {render,screen,cleanup,getByRole} from '@testing-library/react';
import { act } from '@testing-library/react';
import RecipeModal from '../RecipeModal'
import WeekPanel from '../WeekPanel';
import SchedulePage from '../pages/SchedulePage'
import WeekRow from '../WeekRow'
test('week panel should render',()=>{
    const mealPlan={
        "id": 1,
        "startDate": "29/08/2021",
        "meals": ["1","2","3","4","5"]
      }
    const recipes=["Burger","Pizza","Sushi","Fries","Noodles"]
    render(<WeekPanel mealPlan={mealPlan} recipes={recipes}/>)
    expect(screen.getByRole('weekPanel')).toBeInTheDocument()
    expect(screen.getByRole('weekPanel')).toHaveTextContent('29/08/2021')
})


test('week panel fill in relevant fields correctly',()=>{
  const mealPlan={
      "id": 1,
      "startDate": "29/08/2021",
      "meals": ["1","2","3","4","5"]
    }
  const recipes=["Burger","Pizza","Sushi","Fries","Noodles","Ribs"]
  const dayMap=["Monday","Tuesday","Wednesday","Thursday","Friday"]
  render(<WeekPanel mealPlan={mealPlan} recipes={recipes}/>)
  const row = screen.getAllByRole('dayRow')
  const days = screen.getAllByRole('dayRow')
  const meals = screen.getAllByRole('dayRow')
  for(var i=0;i<5;i++){
    expect(row[i]).toContainElement(days[i])
    expect(row[i]).toContainElement(meals[i])
    expect(days[i]).toHaveTextContent(dayMap[i])
    expect(meals[i]).toHaveTextContent(recipes[i+1])
  }
})
