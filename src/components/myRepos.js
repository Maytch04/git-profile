import React from 'react';
//import store from '../store/projStore'
import {getRepos} from '../api/jsonData'
import {connect} from 'react-redux'



const MyRepos = React.createClass({
	componentWillMount(){
		getRepos()
	}, 

	render(){

		return(
				<div className="repo">
						<div className="repoNav">
			       		<ul>
			       			<li><a href="#">Overview</a></li>
			       			<li><a href="#">Repositories</a><span>{this.props.public_repos}</span><div  className="count"></div></li>
			       			<li><a href="#">Stars</a><span>0</span><div className="count2"></div></li>
			       			<li><a href="#">Followers</a><span>{this.props.followers}</span><div  className="count3"></div></li>
			       			<li><a href="#">Following</a><span>{this.props.following}</span><div  className="count4"></div></li>
			       		</ul>
			       		<div className="repoHR"></div>
			       		</div>

			       		<div className="repoSearch">
			       			
			       				<input className="searchInput" type="text" placeholder="Search repositories..." />
			       		</div>
			       				<div><button className="type">Type</button></div>
			       				<div><button className="languageInput">Language</button></div>
			       				<div><button className="new"><p>New</p></button></div>
			       			
			       		
			       	
			       	{this.props.repos.map(item=>(
			       		<div key={item.id} className="repoNames">
			       			<ul>
			       				<li className="names"><a href={item.html_url}>{item.name}</a></li>
			       				<li className="language"><span>{item.language}</span></li><div id="dot"></div>
			       			</ul>
			       			<div className="repoHR2"></div>
			       		</div>
			       	))}
				</div>
			
		)
	}
})

function mapStateToProps (appState){
	return {repos: appState.repos, public_repos:appState.public_repos, followers:appState.followers, following:appState.following}
}

export default connect(mapStateToProps)(MyRepos)



