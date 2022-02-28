import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logOut, getUser } from './services/fetch-utils.js';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import SearchDetailPage from './SearchDetailPage';
import FavoritesPage from './FavoritesPage';


function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    async function fetch() {
      const data = getUser();

      setCurrentUser(data);
    }

    fetch();

  }, []);

  async function handleLogout() {
    logOut();

    setCurrentUser('');
  }

  return (
    <Router>
      <div className="nav-link">
        {currentUser &&
          <div>
            <NavLink to="/search">Search Page</NavLink>
            <NavLink to="/searchdetail">Search Detail Page</NavLink>
            <NavLink to="/favorites">Favorites Page</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </div>}
      </div> 
      <div>
        <Switch>
          <Route exact path="/">
            {currentUser
              ? <Redirect to="/search" />
              : <AuthPage setcurrentUser={setCurrentUser} />
            }
          </Route>
          <Route exact path="/search" >
            {currentUser
              ? <SearchPage />
              : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/searchdetail" >
            {currentUser
              ? <SearchDetailPage />
              : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/favorites" >
            {currentUser
              ? <FavoritesPage />
              : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
