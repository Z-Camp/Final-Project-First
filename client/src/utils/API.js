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

// save post data for a logged in user

export const savePost = function (postData, token) {
  return axios.put('/api/users', postData, { headers: { authorization: `Bearer ${token}` } });
};

// remove saved book data for a logged in user
export const deleteBook = function (postId, token) {
  return axios.delete(`/api/users/posts/${postId}`, { headers: { authorization: `Bearer ${token}` } });
};

export const getPost = function (postId) {
  return axios.get(`/api/posts/${postId}`);
};

export const getAllPosts = function (username) {
  return axios.get(`/api/posts`);
};

export const searchPosts = function (searchInput) {
  return axios.get(`/api/posts/${searchInput}`);
};
