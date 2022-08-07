import React from 'react'
import { createContext ,useState} from "react";

export const MainContext = createContext();

const ContextApi = (props) => {
    const [post, setPost] = useState(null);
    const [postDetail, setPostDetail] = useState(null);
    const [profile, setProfile] = useState(null );
  return (
    <div>
         <MainContext.Provider value={{post,setPost,postDetail, setPostDetail,profile, setProfile}}>
        {props.children}
      </MainContext.Provider>

    </div>
  )
}

export default ContextApi