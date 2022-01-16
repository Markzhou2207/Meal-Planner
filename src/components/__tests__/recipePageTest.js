import {render,screen,cleanup, getByTestId, fireEvent} from '@testing-library/react';
import RecipePage from '../pages/RecipePage';
test('week panel should render',()=>{
    render(<RecipePage/>)

    expect(screen.queryByText('Create New Recipe')).toBeNull()
    fireEvent.click(screen.getByText('Create New'))
    expect(screen.queryByText('Create New Recipe')).toBeInTheDocument()
})