import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logOut, getUser } from './services/fetch-utils.js';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import SearchDetailPage from './SearchDetailPage';
import FavoritesPage from './FavoritesPage';
import AboutPage from './AboutPage';


function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <Router>
      <div>
        {currentUser &&
          <div className="nav-link">
            <NavLink to="/search">Search Page</NavLink>
            <NavLink to="/searchdetail">Search Detail Page</NavLink>
            <NavLink to="/favorites">Favorites Page</NavLink>
            <button onClick={logOut}>Logout</button>
          </div>}
      </div> 
      <div>
        <Switch>
          <Route exact path="/">
            {currentUser
              ? <Redirect to="/search" />
              : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route exact path="/search" >
            {!currentUser
              ? <Redirect to="/" />
              : <SearchPage />
            }
          </Route>
          <Route exact path="/searchdetail/:id" >
            {!currentUser
              ? <Redirect to="/" />
              : <SearchDetailPage />
            }
          </Route>
          <Route exact path="/favorites" >
            {!currentUser
              ? <Redirect to="/" />
              : <FavoritesPage />
            }
          </Route>
          <Route exact path="/about" >
            {!currentUser
              ? <Redirect to="/" />
              : <AboutPage />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
