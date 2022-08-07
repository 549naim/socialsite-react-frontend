import '../App.css';
import MainPage from './MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PostDetails from './PostDetails';
import Profile from "./Profile"
import { useEffect, useContext } from 'react'
import Axios from 'axios'
import { Context } from "../context/ProfileContext";
import Login from "./Login"
import Register from "./Register"
import Newpost from './Newpost';
import Update from './Update';

function App() {
  const [{ profile }, dispatch] = useContext(Context)
  useEffect(() => {
    try {
      const getData = async () => {
        await Axios({
          method: "GET",
          url: "http://127.0.0.1:8000/profile/",
          headers: {
            Authorization: `token ${window.localStorage.getItem('token')}`,
          },
        }).then((response) => {
          dispatch({
            type: 'ADD_PROFILE',
            value: response.data['dataset']
          })
        });
      };
      getData();
    } catch {
      dispatch({
        type: 'ADD_PROFILE',
        value: null
      })
    }

  }, []);


  return (
    <div className="App">

      <BrowserRouter>
        <MainPage />
        <Routes>



          {profile ? <>
            <Route path="/" element={<Home />} />
            <Route path="/newpost" element={<Newpost />} />
            <Route path="/:id" element={<PostDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/:id/update" element={<Update />} />
          </>
            : <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
