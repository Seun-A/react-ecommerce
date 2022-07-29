import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user }); 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Outlet />
    </div>
    );
  }
}

export default App;
