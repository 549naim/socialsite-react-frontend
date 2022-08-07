import React, { useEffect, useContext } from "react"
import Axios from "axios"
import SinglePost from './SinglePost'
import { MainContext } from '../context/ContextApi';
const Post = () => {
    const {post,setPost} =useContext(MainContext)
    useEffect(() => {
        const getTodo = async () => {
          await Axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/",
            headers: {
              Authorization: `token ${window.localStorage.getItem('token')}`, 
          },
          }).then((response) => {
            // console.log(response.data);
            setPost(response.data);
          });
        };
        getTodo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
      
  return (
    <div>
        {
            post?.map((post,i) =>(
               <SinglePost post={post} key={i}/>
            ))
        }
           
               
    </div>
  )
}

export default Post