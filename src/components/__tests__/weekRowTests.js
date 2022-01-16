import {render,screen,cleanup, getByTestId, fireEvent} from '@testing-library/react';
import { configure,mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WeekRow from '../WeekRow';

configure({ adapter: new Adapter() });

test('week panel should render',()=>{
    const recipes=["Burger","Pizza","Sushi","Fries","Noodles","Ribs"]
    const bar = render(<WeekRow day={0}  meal="Pizza" recipes={recipes}/>)
    
    expect(screen.getByRole("dayRow")).toBeInTheDocument()
})

test('week panel should populate the day and meal field correctly',()=>{
    const recipes=["Burger","Pizza","Sushi","Fries","Noodles","Ribs"]
    const bar = render(<WeekRow day={0}  meal="Pizza" recipes={recipes}/>)
    
    expect(screen.getByRole("day")).toHaveTextContent("Monday")
    expect(screen.getByRole("meal")).toHaveTextContent("Pizza")
})

test('week panel should populate with all recipes provided with a remove',()=>{
    const recipes=["Burger","Pizza","Sushi","Fries","Noodles","Ribs"]
    const bar = render(<WeekRow day={0}  meal="Pizza" recipes={recipes}/>)
    
    fireEvent.click(screen.getByText('Pizza'))
    const options = screen.getAllByRole('dropdownOption')
    expect(options).toHaveLength(recipes.length+1)
})