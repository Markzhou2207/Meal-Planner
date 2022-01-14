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
    <div className='App'>
        <Router>
          <Navigation/>
          <Routes>
            <Route path='/' component={Home}/>
            <Route path='/recipes' component={RecipePage}/>
          </Routes>
        </Router>
        {/* <RecipePage></RecipePage> */}
        <SchedulePage></SchedulePage>
    </div>
  );
}

export default App;
