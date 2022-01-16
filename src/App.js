import Navigation from './components/Navigation'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RecipePage from './components/pages/RecipePage';
import MenuPage from './components/pages/MenuPage'

import LoginPage from './components/pages/LoginPage'
import { useState,useEffect } from 'react';
function App() {
  const [loggedIn,setLoggedIn]=useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false)
    }
  }, [loggedIn]);

  return (
    (loggedIn?<Router>
      <div className='App'>
          <Navigation setLoggedI={setLoggedIn}/>
          <Routes>
            <Route exact path='/' element={<SchedulePage/>}/>
            <Route exact path='/recipes' element={<RecipePage/>}/>
          </Routes>
        {/* <RecipePage></RecipePage> */}
      </div>
    </Router>:
  <div><LoginPage setLoggedIn={setLoggedIn}/></div>
    )
  );
}

export default App;
