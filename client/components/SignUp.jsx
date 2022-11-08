import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import FavBox from '../components/FavBox.jsx';

export default function SignUp() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [cookies, setCookies] = useCookies(null);
	const [isSignIn, setIsSignIn] = useState(null);
	const [alertMsg, setAlertMsg] = useState('');

	// const handleChange = (e) => {
	//   console.log('handleChange is working');
	//   setUsername(e.target.value);
	//   };

	// const handlePasswordChange = (e) => {
	//   console.log('handlePassword is working')
	//   setPassword(e.target.value);
	// };

	// function onSubmit(e) {
	//   console.log('onSubmit is working')
	//   e.preventDefault();
	//   // we make a post request to our server
	//     const { username, password } = req.body;
	//   fetch(`http://localhost:3000/signup`, {
	//     method: 'POST',

	//   }, {username, password})
	//   .then(res => res.json())
	//   .then(user => {
	//     // we need to check if there is already a user with the same name
	//     // if so we need to say you need to login
	//     console.log('THIS POSTING FOR SIGN UP WORKS~~~');
	//   })
	//   .catch(err => {
	//     console.log(err);
	//   })
	//   // username has to be unique
	//   if (User.username) return alert('User already exists, please login.');

	// otherwise we create user
	// const User = {
	//   username: res.User.username,
	//   password: res.User.password,
	//   favs: []
	// }

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			//fetching to the backend
			const response = await fetch(`http://localhost:3000/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				//sending information to backend in this format
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			console.log(username, password);

			//this checks if the user has an account
			if (!isSignUp && username)
				return alert('User already exists, please login.');

			//if the user does not have an acct, then create the user in database
			if (!isSignUp && response.status === 200) {
        // setCookie("username_cookie_id",res.user.username);
				console.log('This user is signed up');
			}
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * creates cookie Id of user that is login to track the current session,
	 * to post a get request to get the current user to the back end
	 */

	// }

	// cookie event handler, set cookie with res, the res has to match debbie's frontend cookie

	// onsubmit
	// here we need logic for if the name and password already exist
	// do the post request and if "user" not found then send error back to client
	// check database for user, if not continue as normal
	// if so, tell client so and have them login
	// this needs to post to db and create a new user
	// login then will need to check from there if these values exist
	// we then need separate handling for the bcrypt validation for login

	// login
	// your actually making a post request to send body
	// use body to check name and password
	// before loading favs

	//favs
	// get favs into state
	// the component to make fetch from
	// on successful login, response could be uer favs and we would need to pass that up
	// ot parent component that will be rendered in dom, successful login could send a cookie to validate
	// who they are
	// ideally db, so they can they get favs from wherever
	//OR when home page renders make a get req but that has to validate like with sessions/jwts

	//front end cookies, may need to be set to null at start

	const isSignUp = false;

	return (
		<form
			onSubmit={onSubmit}
			id="signup-form"
		>
			<label>Username: </label>
			<input
				type="text"
				required
				name="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<label>Password: </label>
			<input
				type="password"
				required
				name="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				type="submit"
				className="submit-button"
				value="Sign Up or Login"
			/>
		</form>
	);
}
