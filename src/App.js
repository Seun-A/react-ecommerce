import './App.css'

import React from 'react'
import { Outlet } from 'react-router-dom'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from './components/header/header.component'


class App extends React.Component {
  unsubscribeFromAuth = null
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth) 
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          })
        }) 
      } 
      setCurrentUser(userAuth)
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
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
