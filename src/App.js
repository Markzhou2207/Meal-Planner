import Navigation from './components/Navigation'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RecipePage from './components/pages/RecipePage';
import MenuPage from './components/pages/MenuPage'

function App() {
  return (
    <Router>
    <div>      
      <Navigation/>
        <Routes>
          <Route exact path='/' element={<MenuPage/>}/>
          <Route exact path='/recipes' element={<RecipePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
