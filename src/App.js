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
function App() {
  return (
    <div className="App">
      <Route path='/' component={Navigation} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/joke-board/new-joke' component={JokeForm} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/joke-board' component={NewJokeButton} />
      <PrivateRoute path='/joke-board' component={JokeBoard} />
    </div>
  );
}

export default App;
