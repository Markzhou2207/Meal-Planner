import Navigation from './components/Navigation'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/pages/Home.js'
import RecipePage from './components/pages/RecipePage';
import SchedulePage from './components/pages/SchedulePage'

function App() {
  return (
    <Router>
    <div>
        
          <Navigation/>
          <Routes>
            <Route exact path='/' element={<SchedulePage/>}/>
            <Route exact path='/recipes' element={<RecipePage/>}/>
          </Routes>
        {/* <RecipePage></RecipePage> */}
    </div>
        </Router>
  );
}

export default App;
