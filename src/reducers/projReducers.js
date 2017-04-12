const Initialstate = { 
	name: [], 
	blog: [],
	location:[], 
	email:[], 
	avatar_url:[], 
	html_url:[],
	public_repos:[],
	followers:[], 
	following:[],
	repos:[]
}

export function profileReducer(state = Initialstate, action){
	switch(action.type){
		case 'GET_DATA':
			return{
				...state,
				name: action.user.name,
				blog: action.user.blog,
				location: action.user.location, 
				email: action.user.email, 
				avatar_url: action.user.avatar_url, 
				html_url: action.user.html_url, 
				public_repos: action.user.public_repos, 
				followers: action.user.followers,
				following: action.user.following
			}

		case 'GET_REPOS':
			return{
				...state, repos: action.repos
			}
		default: 
		return state
	}
}
