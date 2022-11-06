import React, { useState } from 'react';
// import {useCookies} from 'react-cookies';
import { useNavigate } from 'react-router';
import FavBox from '../components/FavBox.jsx';


export default function SignUp() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
    
//
  const handleChange = (e) => {
    console.log('handleChange is working');
    setUsername(e.target.value);
    };

  const handlePasswordChange = (e) => {
    console.log('handlePassword is working')
    setPassword(e.target.value);
    };

    function onSubmit() {
      e.preventDefault();
    // we make a post request to our server
    //   const { username, password } = req.body;
      fetch('/http://localhost:3000/signup', {
        method: 'POST'
      }, {username, password})
      .then(user => {
    // we need to check if there is already a user with the same name
    // if so we need to say you need to login
        if (user) return alert('User already exists, please login.');
    // otherwise we create user
      // const User = {
      //   username,
      //   password,
      //   favs: []
      // }
      const accountCreatedIsSuccess = res.status === 200;
      console.log(accountCreatedIsSuccess);
      if (accountCreatedIsSuccess && isLogin) {
        FavBox();
      }
    })
      .catch(err => {
        console.log(err);
      })
  }


// want me to do sessions and set it
// cooke event handler, set cookie with res, the res has to match debbie's frontend cookie


    // onsubmit
    // here we need logic for if the name and password already exist
    // do the post request and if "user" not found then send error back to client
        // check datat abse for user, if not continue as normal
    // if so, tell client so and have them login
    // this needs to post to db and create a new user
    // login then will need to check from there if these values exist
    // we then need seperate handling for the bcrypt validation for login
        
    // login
    // your actually making a post request to send body 
    // use body to check name and passeord
    // before loading favs

  
    //favs
    // get favs into state
    // the component to make feth from 
    // on succesful login, response could be uer favs and we would need to pass that up
    // ot parent compoment that will be rendered in dom, successful login could send a cookie to validate
    // who they are 
// ideally db, so they can they get favs from wherever
    //OR when home page renders make a get req but thst has to validate like with sessions/jwts

    //front end cookies, may need to be set to null at start

    // will we need to have a combo signup / login?
    // enter the info below yeah
    // then first check that 
const isLogin = false; 

  return (
    <form onSubmit={onSubmit} id='signup-form'>
    <label>Username: </label>
    <input type="text" required name="username" onChange={(e) => setUsername(e.target.value)}/><br />
    <label>Password: </label>
    <input type="password" required name="password"onChange={(e) => setPassword(e.target.value)}/><br />
    <input type="submit" value="Sign Up" />
    </form>
  )
}
