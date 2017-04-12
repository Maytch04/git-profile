import axios from 'axios'
import store from '../store/projStore'

export function getUser(){
  axios.get('https://api.github.com/users/maytch04').then(data=>{
  	// console.log(data.data)
    store.dispatch({
      type: 'GET_DATA', 
      user: data.data
    })
  })
}

export function getRepos(){
  axios.get('https://api.github.com/users/maytch04/repos').then(repos=>{
    store.dispatch({
      type: 'GET_REPOS', 
      repos: repos.data
    })
  })
}
  