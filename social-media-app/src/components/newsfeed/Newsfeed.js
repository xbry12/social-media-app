import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../styles/newsfeed.css";
import { LoremIpsum } from "react-lorem-ipsum";
// import { LoremIpsum, Avatar} from "react-lorem-ipsum";
// import {
//   loremIpsum,
//   name,
//   surname,
//   fullname,
//   username,
// } from "react-lorem-ipsum";

function Newsfeed() {

  const [username, newUsername] = useState();

  const [post, newPost] = useState();

  return (
    <div className="newsfeed">
      <h1>Newsfeed goes here</h1>
      <h2>You will make a new post here (MUST BE A FORM)</h2>
      <div className="newpost">
        <form>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={newUsername}
            />
          </label>
          <label>
            New Post: (add JS here)
            <input type="text" name="name" placeholder="What's on your mind?" />
          </label>
          <input type="submit" value="Post" />
        </form>
      </div>
      <div className="post">
        <p>
          This will be your new post:
          <p>New Username:{username}</p>
          <LoremIpsum />
        </p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Newsfeed;
