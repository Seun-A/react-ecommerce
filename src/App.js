import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  unsubscribeFromAuth = null
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          });
          // console.log(this.state) // Test to check current user
        }); 
      } 
      setCurrentUser(userAuth); 
    })
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
