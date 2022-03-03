import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { logOut } from './services/fetch-utils.js';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import FavoriteDetail from './FavoriteDetail';
import FavoritesPage from './FavoritesPage';
import AboutPage from './AboutPage';


function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <Router>
      <div>
        {currentUser &&
        <div className='top'>
          <div className='title'>
            <p>sunshine</p>
          </div>
          <div className="nav-link">
            <NavLink to="/search" activeClassName='active-nav'>Search</NavLink>
            <NavLink to="/favorites" activeClassName='active-nav'>Favorites</NavLink>
            <NavLink to="/about" activeClassName='active-nav'>About</NavLink>
            <button onClick={logOut}>Logout</button>
            <FavoriteDetail
            />
             
          </div>
        </div>
        }
      </div> 
      <div className='yellow'>
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
          <Route exact path="/favoritedetail" >
            {!currentUser
              ? <Redirect to="/" />
              : <FavoriteDetail
              />
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
