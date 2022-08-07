import React,{useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from "../context/ProfileContext"
const MainPage = () => {
  const [{profile}]= useContext(Context)
  const logoutNow=()=> {
    window.localStorage.clear()
    window.location.href="/"
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
   <Link className="navbar-brand fs-2 " to="/"> Social Blog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
       
        {profile?<>
          <li className="nav-item">
          <Link className="nav-link fs-5 text-white" to="/newpost">New post</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link fs-5 text-white" to="/profile">Profile</Link>
        </li>
         
        <li className="nav-item">
          <Link onClick={logoutNow} className="nav-link fs-5 text-white" to="/">Logout</Link>
        </li>  
        </>
          :<>
           <li className="nav-item">
          <Link className="nav-link fs-5 text-white" to="/login">Log in </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 text-white" to="/register">Register</Link>
        </li>
          </>}
        
           
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-primary text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
};

export default MainPage;
