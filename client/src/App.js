import React, { useState, useEffect, setState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Profile from './pages/Profile';
import LandingPage from './pages/landingPage'
import Navbar from './components/Navbar';


import * as API from './utils/API';
import AuthService from './utils/auth';

// import our context object for state
import UserInfoContext from './utils/UserInfoContext';
import PostContext from './utils/PostContext';

function App() {
	// set data to be used for UserInfoContext and make it available to all other components
	const [userInfo, setUserInfo] = useState({
		savedPosts: [],
		savedComments: [],
		username: '',
		email: '',
		postCount: 0,
		commentCount: 0,
		avatar: '',
		// method to get user data after logging in
		getUserData: () => {
			// if user's logged in get the token or return null
			const token = AuthService.loggedIn() ? AuthService.getToken() : null;

			if (!token) {
				return false;
			}
			API.getMe(token)
				.then(({ data: { username, email, savedPosts, savedComments, postCount, commentCount, avatar } }) =>
					setUserInfo({ ...userInfo, username, email, savedPosts, savedComments, postCount, commentCount, avatar })
				)
				.catch((err) => console.log(err));
		},
	});
	const [postInfo, setPostInfo] = useState({
<<<<<<< HEAD
		allPosts: [],
		getAllPosts: () => {
			API.getAllPosts()
				.then()
				.then(({ data: { allPosts } }) =>
					setPostInfo({ ...postInfo, allPosts })
				)
				.catch((err) => console.log(err));
		},
=======
		AllPosts:[]
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed
	});
	function loadPosts() {
		API.getAllPosts()
			.then(res =>setPostInfo({AllPosts: res.data }))
			.catch((err) => console.log(err));
	}


	// on load, get user data if a token exists
	useEffect(() => {
<<<<<<< HEAD
		userInfo.getUserData();
		postInfo.getAllPosts()
	});
=======
	userInfo.getUserData();
	loadPosts()
	},[]);
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed

	return (
		<Router>
			<>
				{/* wrap our entire app in context provider and provide userInfo state as value */}
				<UserInfoContext.Provider value={userInfo}>
					<PostContext.Provider value={postInfo}>
						<Navbar />
						<Switch>
							<Route exact path="/" component={FrontPage} />
							<Route exact path="/saved" component={Profile} />
							<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
						</Switch>
					</PostContext.Provider>
				</UserInfoContext.Provider>
			</>
		</Router>
	);
}

export default App;
