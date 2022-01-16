import {render,screen,cleanup, getByTestId, fireEvent} from '@testing-library/react';
import PaginationBar from '../PaginationBar'

import { configure,mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

test('pagination bar should render',()=>{
    render(<PaginationBar itemsPerPage={5} totalItems={50} />)

    expect(screen.getByRole('paginationBar')).toBeInTheDocument()
})



test('pagination bar should create correct number of buttons',()=>{
    const bar = mount(<PaginationBar itemsPerPage={5} totalItems={50} />)
    const buttons = bar.find('li')
    expect(buttons).toHaveLength(50/5)
})