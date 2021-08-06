import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../styles/newsfeed.css";
import { LoremIpsum } from "react-lorem-ipsum";
import Post from "../../components/posts/Post";
import CreatePost from "../../components/posts/CreatePost";

function Newsfeed() {
  const initialPost = {
    username: "",
    post: "",
    likes: "",
  };
  const [posts, setPost] = useState(initialPost);

  // YO user = thepost AND

  const addPost = (thepost) => {
    thepost.id = posts.length + 1;
    setPost([...thepost, posts]);
  };
  const updatePost = (newposts) => {
    setPost({
      username: newposts.username,
      post: newposts.post,
      likes: newposts.likes,
    });
  };
  //dummy data
  const postData = [
    {
      username: "wow2021",
      post: "Just got a new job today!",
      likes: "221 Likes",
      id: 1,
    },
    {
      username: "bp_1991",
      post: "Moving to Atlanta!",
      likes: "143 Likes",
      id: 2,
    },
    {
      username: "scarter.1969",
      post: "Releasing Watch The Throne 2 on Friday!",
      likes: "223,492 Likes",
      id: 3,
    },
  ];

  const [thepost, myPost] = useState(postData);
  //using

  const [username, newUsername] = useState("");
  //using

  // const [currentPost, setCurrentPost] = useState({});

  // const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="newsfeed">
      <h1>Newsfeed goes here</h1>
      <h2>You will make a new post here (MUST BE A FORM)</h2>
      <div className="newpost">
        <form>
          {/* <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={newUsername}
            />
          </label> */}
          {/* <label>
            New Post: (add JS here)

           

            <input type="text" name="name" placeholder="What's on your mind?" />
          </label> */}
          {/* <input type="submit" value="Post" /> */}
        </form>
        <div>
          ADDING POST (TEST THE JAVASCRIPT)
          <CreatePost addPost={addPost} />
        </div>
      </div>
      <div className="post">
        <p>
          This will be your new post:
          <p>New Username:{username}</p>
          <LoremIpsum />
        </p>
        <button>Edit</button>
        <button>Delete</button>

        <div>
          MOCK POST BELOW:
          <Post thepost={thepost} />
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;

// const [posts, setPost] = useState(initialPost);

// const [post, newPost] = useState("");
