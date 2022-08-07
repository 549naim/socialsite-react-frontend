import React, { useContext,useState } from "react";
import {Context } from "../context/ProfileContext";

const Profile = () => {
const [{profile}]= useContext(Context)
const [email, setemail] = useState(profile?.user?.email);
const [fname,setfname]=useState(profile?.user?.first_name);
const [lname,setlname] =useState(profile?.user?.last_name);


  return (
    <div>
      <div className="card profilecard">
        <img
          src={`http://127.0.0.1:8000${profile?.image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{profile?.user?.username}</h5>
          <h5 className="card-title">{profile?.user?.email}</h5>
        </div>
      </div>
      




      <div>
        <form method="POST" enctype="multipart/form-data">

          <fieldset class="form-group">
            <legend class="border-bottom mb-4">Profile Info</legend>
            <div class="form-group">
              <label>Uplode Profile Picture</label>
              <div class="row">
                <div class="col">
                  <input  type="file" class="form-control" />
                </div>
                <div class="col">
                  <p  className="btn btn-info">Upload</p>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" value={fname} onChange={(e)=>setfname(e.target.value)}/>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" value={lname} onChange={(e)=>setlname(e.target.value)} />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control"  value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
          </fieldset>
          <div class="form-group">
            <p class="btn btn-outline-info" >Update</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
