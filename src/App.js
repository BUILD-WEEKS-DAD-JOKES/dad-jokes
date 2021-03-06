import React from 'react';
import Landing from './components/landing'
import Navigation from './components/navigation'
import { Route } from 'react-router-dom'
import './App.css'
import PrivateRoute from './util/PrivateRoute'
import Login from './components/login'
import Register from './components/register'
import JokeBoard from './components/jokeboard'
import NewJokeButton from './components/sub/newJokeButton'
import JokeForm from './components/jokeform'
import SavedJokes from './components/savedJokes'
import CSSPlugin from 'gsap/CSSPlugin'
import EditForm from './components/editForm';

const C = CSSPlugin

function App() {
  return (
    <div className="App">
      <Route path='/' component={Navigation} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/joke-board/new-joke' component={JokeForm} />
      <Route path='/joke-board/edit/:id' component={EditForm} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/joke-board' component={NewJokeButton} />
      {/* <Route exact path='/joke-board' component={SavedJokes} /> */}
      <PrivateRoute path='/joke-board' component={JokeBoard} />
    </div>
  );
}

export default App;
