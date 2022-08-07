import React ,{useState}from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Newpost = () => {
const [title, settitle] = useState(null);
const [detail, setdetail] = useState(null);
const [Image, setImage] = useState(null);
const navigate =useNavigate()
const addNewPost = async()=> {
    let formfield = new FormData()
    formfield.append('title',title)
    formfield.append('description',detail)
    if(Image !== null){
       formfield.append('image',Image)
    }
    await Axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/',
        data: formfield,
        headers: {
            Authorization: `token ${window.localStorage.getItem('token')}`, 
        }
    }).then(response => {
        alert("Post created successfully");
        navigate("/")
    })

}


  return (
    <div>
        
<div className="container">
    <div class="form-group">
        <label >Title</label>
        <input onChange={(e)=>settitle(e.target.value)} type="text" class="form-control" placeholder="Post title" />
    </div>
    <div class="form-group">
        <label >Description</label>
        <textarea onChange={(e)=>setdetail(e.target.value)} placeholder="Description" class="form-control" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label >Image</label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" class="form-control" />
    </div>
    <br />
    <p onClick={addNewPost}  className="btn btn-info">New Post</p>
</div>
    </div>
  )
}

export default Newpost