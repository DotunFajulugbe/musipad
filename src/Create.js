import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Dotun');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const blog = { title, body, author };

    setIsPending(true);

    fetch ('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(() => {
      console.log('new post added');
      setIsPending(false);
      history.push('/');
    })
  }

    return (  
    <div className="create">
      <h2> Add a New Post</h2> 
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input 
          type="text"
          required
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
        /> 
        <label>Body</label>
        <textarea
         required
         value ={body}
         onChange={(e) => setBody(e.target.value)}
        >
        </textarea>
        <label>Post author:</label>
        <select
         value = {author}
         onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Dotun">Dotun</option>
          <option value="Damie">Damie</option>
          <option value="Max">Max</option>
        </select>
        {!isPending && <button>Add Post</button> }
        {isPending && <button disabled>Please wait...</button> }
      </form>
    </div>
  );
  }
 
export default Create;