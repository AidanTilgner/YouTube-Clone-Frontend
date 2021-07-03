//modules
import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//files
import './App.scss'

//components
import MainPage from './pages/MainPage/MainPage'
import SignInPage from './pages/SignInPage/SignInPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact
            render={() => <MainPage/>}
          />
          <Route path="/signin"
            render={() => <SignInPage/>}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
