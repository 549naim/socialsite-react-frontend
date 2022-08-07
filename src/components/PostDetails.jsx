import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../context/ContextApi";
import Axios from "axios";
import { Link } from 'react-router-dom'
import { Context } from "../context/ProfileContext"
import { useNavigate } from 'react-router-dom';
const PostDetails = () => {
    const { id } = useParams();
    const { postDetail, setPostDetail } = useContext(MainContext);
    const [{ profile }, dispatch] = useContext(Context)
    const navigate  =useNavigate()
    useEffect(() => {
        const getTodo = async () => {
            await Axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/${id}`,
                headers: {
                    Authorization: `token ${window.localStorage.getItem('token')}`,
                },
            }).then((response) => {
               
                setPostDetail(response.data);
            });
        };
        getTodo();
    }, []);
    const deletePost = async() => {
        await Axios({
            method: "DELETE",
            url: `http://127.0.0.1:8000/api/${id}`,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`,
            },
        }).then(response => {
            navigate("/")
        })
    }
    return (
        <div>
            <div class="card">

                <img src={postDetail?.image} className=" img-thumbnail detail-image" alt="..." />
                <div class="card-body">
                    <div><span>{postDetail?.user?.user?.username}</span><span><img className="user-image" src={`http://127.0.0.1:8000${postDetail?.user?.image}/`} alt="" /></span></div><span>Post at: {postDetail?.date}</span>
                    <h3 class="card-title">{postDetail?.title}  </h3>
                    <p class="card-text">{postDetail?.description}</p>

                </div>
            </div>
            {
                profile.user['id'] === postDetail?.user?.user?.id && (
                    <div className="button-two">
                        <Link to={`/${postDetail.id}/update`} className="button-edit btn btn-info" >Edit</Link>
                        <button onClick={deletePost}  class="btn btn-danger">Delete</button>
                    </div>
                )
            }


        </div>
    );
};

export default PostDetails;
