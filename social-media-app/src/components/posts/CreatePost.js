import React, { useState } from "react";

const CreatePost = (props) => {
  const initialPostState = { id: null, username: "", post: "", likes: "" };
  //temporary state
  const [posted, setPost] = useState(initialPostState);

  const handlePostChange = (e) => {
    //updating state
    const { username, value } = e.target;
    setPost({ ...posted, [username]: value });
  };
  return (
    <form
      onSubmit = { (e) => {
        e.preventDefault();
        if (!posted.username || !posted.post) return props.addPost(posted);
        setPost(initialPostState);
      }}
    >
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        defaultValue={posted.username}
        onChange={handlePostChange}
      />
      <label>New Post</label>
      <input
        type="text"
        name="newpost"
        placeholder="New Post"
        defaultValue={posted.post}
        onChange={handlePostChange}
      />
        {/* <label>Image</label>
        <input type="image" name="newimage" placeholder="Enter your image" value= */}
      <button>Post</button>
    </form>
    //need to add temporary state to form
  );
};

export default CreatePost;
