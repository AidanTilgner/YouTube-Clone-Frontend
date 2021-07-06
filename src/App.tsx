//modules
import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//files
import './App.scss'

//components
import MainPage from './pages/MainPage/MainPage'
import SignInPage from './pages/SignInPage/SignInPage'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Sidebar/>
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
