import React from 'react';

// model our saved post and comment states for context
// running this gives us our Provider & Consumer
// we'll set all of this data in App.js and use it throughout other components!
const PostContext = React.createContext({
<<<<<<< HEAD
  getAllPosts: () => undefined,
  allPosts: [],
=======
  AllPosts:[]
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed
});

export default PostContext;
