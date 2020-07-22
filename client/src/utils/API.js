import axios from 'axios';

export const getAllUsers = function () {
  return axios.get('/api/users');
};

// route to get logged in user's info (needs the token)
export const getMe = function (token) {
  return axios.get('/api/users/me', { headers: { authorization: `Bearer ${token}` } });
};

// get a user by their username, not being used in the app just showing how it could work
export const getUser = function (username) {
  return axios.get(`/api/users/${username}`);
};

export const createUser = function (userData) {
  return axios.post('/api/users', userData);
};

export const loginUser = function (userData) {
  return axios.post('/api/users/login', userData);
};

export const savePost = function (postData, token) {
  return axios.put('/api/users', postData, { headers: { authorization: `Bearer ${token}` } });
};

// remove saved book data for a logged in user
export const deletePost = function (bookId, token) {
  return axios.delete(`/api/users/books/${bookId}`, { headers: { authorization: `Bearer ${token}` } });
};

export const getAllPosts = function () {
  return axios.get('/api/posts')
    ;
}

export const createComment = function (postID, comment, token) {
  //not solid just typing stuff
  return axios.post('/api/post/', postID, comment, { headers: { authorization: `Bearer ${token}` } })
}

export const deleteComment = function (postID, comment) {
  return axios.delete(`/api/post/${postID}/${comment},`)
}