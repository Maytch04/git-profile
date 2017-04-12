import React from 'react';
import store from '../store/projStore'
import {getUser} from '../api/jsonData'
import '../styles/myProfile.css'


export default React.createClass({
	getInitialState(){
	return {
		name:[],
		blog:[],
		location:[], 
		email:[], 
		avatar_url:[], 
		html_url:[]
	}
}, 

componentWillMount(){
	this.unsubscribe = store.subscribe(()=>{
		const appState = store.getState()

		this.setState({
			name: appState.name,
			blog:appState.blog,
			location:appState.location,
			email: appState.email,
			avatar_url:appState.avatar_url,
			html_url:appState.html_url
		})
	})
	getUser()
},
componentWillUnmount() {
	this.unsubscribe()
},
  render() {
    return (
      <div className="profile">
      	<div className="avatarPhoto"></div>
      	<div className="nameInfo">
      		<ul>
      			<li>{this.state.name}</li>
      			<li className="hrule"></li>
      			<li>{this.state.location}</li>
      			<li><a href="#">{this.state.blog}</a></li>
      		</ul>
      	</div>

      </div>
    )
  }
})