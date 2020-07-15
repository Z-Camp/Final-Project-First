import React from 'react';

// model our saved post and comment states for context
// running this gives us our Provider & Consumer
// we'll set all of this data in App.js and use it throughout other components!
const PostContext = React.createContext({
  allPosts:[],
  getAllPosts: () => undefined,
});

export default PostContext;
