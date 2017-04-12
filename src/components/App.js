import React from 'react';
import MyProfile from './myProfile'
import MyRepos from './myRepos'
import Navbar from './navbar'
import {Provider} from 'react-redux'
import store from '../store/projStore'
import '../styles/navbar.css'
import '../styles/myProfile.css'
import '../styles/app.css'
import '../styles/repos.css'




export default React.createClass({
  render() {
    return (
    <Provider store={store}>
      <div>	
      	<Navbar />
        <MyProfile />
    	    <div className="containerDiv">
           
          <MyRepos />
      		  
    		  </div>
  	 </div>
   </Provider>
    )
  }
})
