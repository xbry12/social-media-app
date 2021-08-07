import React from "react";

const Post = (props) => (
  <div>
    {/* <div>
      <h1>Username</h1>
      <li>Post</li>
      <li>Likes</li>
    </div> */}
    <div>
      {props.thepost.length > 0 ? (
        props.thepost.map((apost) => (
          <div key={apost.id}>
            <h1>{apost.username}</h1>
            <li>{apost.post}</li>
            <li>{apost.likes}</li>
            <button>edit</button>
            <button>delete</button>
          </div>
        ))
      ) : (
        // <p>
        //   <span>No New Post</span>
        // </p>
        null
      )}
    </div>
  </div>
);

export default Post;
