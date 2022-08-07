import React from 'react'
import {Link} from 'react-router-dom'

const SinglePost = ({ post }) => {
    return (
        <div>
            <div className="card">
                {/* <img src={post.image} className=" img-thumbnail post-image" alt=""/> */}
                <hr />
                    <div className="card-body">
                        <div><span>{post.user.user.username}</span><span><img className="user-image" src={`http://127.0.0.1:8000${post.user.image}/`} alt="" /></span></div>
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.description.slice(0,100)}....</p>
                        <span>Post at: {post.date}</span>     <br />
                        <Link to={`/${post.id}`} className="btn btn-primary">See details</Link>
                    </div>
            </div>
            <hr />

        </div>
    )
}

export default SinglePost