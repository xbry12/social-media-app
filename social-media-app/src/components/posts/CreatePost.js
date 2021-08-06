import React, {useState} from 'react';

const CreatePost = (props) => {

    const initialPostState = {id:null, username: '', post: '', likes: ''}
    const [post,setPost] = useState(initialPostState)


    return (
        <form>
            <label>Username</label>
            <input type='text' name='username' value=''/>
            <label>New Post</label>
            <input type='text' name='newpost' value=''/>
            <button>Post</button>
        </form>
        //need to add temporary state to form
    )
}

export default CreatePost;
