import React from 'react';




export default React.createClass({
  render() {
    return (
    	<div className="navbar">
	      <div className="logo">
	      <div className="gitLogo">LOGO</div>
	      <div className="serchbar"></div>
	      	<input className="navInput" type="text" name="fname" placeholder="Search Github" />
	      </div>
	      <div className="navLinks">
	      	<ul>
	      		<li>Pull requests</li>
	      		<li>Issues</li>
	      		<li>Gist</li>
	      	</ul>
	      </div>
	      <div className="rightSideNav">
	      	<ul>
	      		<li>Notif</li>
	      		<li>New</li>
	      		<li>Profile</li>
	      	</ul>
	      </div>
      </div>
    )
  }
})