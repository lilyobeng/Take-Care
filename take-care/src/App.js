import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import userService from './service/userService';
import LoginPage from './pages/LoginPage/LoginPage';
import Affirmations from './pages/Affirmation/AffirmationPage'
import JournalPage from './pages/JournalPage/JournalPage';
import HomePage from './pages/HomePage/HomePage';




export class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
    entries: [], 
   user: userService.getUser()
  };

}

handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
}

handleLogout = () => {
  console.log('log out')
    userService.logout();
    this.setState({ user: null });
}

  render () {
   
    return (
      
      <div className="App">
        <Router>
        <Navbar currentUser={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
             <Route exact path='/getQuotes' >
              <Affirmations />

            </Route>
            
            <Route path='/signup'>
              <SignupPage />
            </Route>

            <Route path='/login' render={
              ({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }>
              
            </Route>

            <Route exact path='/JournalEntry'>
              <JournalPage />
            </Route>
            
            <Route exact path='/'>
              <HomePage />
            </Route> 
          
          </Switch>
      </Router>
      {/* <div className="App">
        <h1>My Journal App</h1>
        <Entries entryData={this.entries} removeEntry={this.removeEntry}/>
        <form handleSubmit={this.handleSubmit}/>
      </div> */}
      </div>
    );
  }
  

}



  // removeEntry = index => {
  //   const { entries } = this.state

  //   this.setState({
  //     entries: entries.filter ((entry, i) => {
  //       return i != index
  //     })
  //   })
  // }

  // handleSubmit = entry => {
  //   this.setState({ entries: [...this.state.entries, entry]})
  // }

  



  
  

export default App;