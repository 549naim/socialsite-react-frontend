import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Axios from 'axios'


const Update = () => {
    const { id } = useParams()
    const [title, settitle] = useState("");
    const [detail, setdetail] = useState("");
    const [Image, setImage] = useState("");
    const [Image2, setImage2] = useState(null);
    const navigate =useNavigate()
   
    useEffect(() => {
        const getTodo = async () => {
            await Axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/${id}/`,
                headers: {
                    Authorization: `token ${window.localStorage.getItem('token')}`,
                },
            }).then((response) => {
                // console.log(response.data);
                settitle(response.data?.title)
                setdetail(response.data?.description)
                setImage(response.data?.image)

            });
        };
        getTodo();
    }, []);

    const updatePost = async()=>{
        let formfield = new FormData()
        formfield.append('title',title)
        formfield.append('description',detail)
        if(Image2 !== null){
           formfield.append('image',Image2)
        }
        await Axios({
            method: 'PUT',
            url:`http://127.0.0.1:8000/api/${id}/`,
            data: formfield,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`,
            },
        }).then (response => {
            console.log(response.data);
            navigate("/")
        })
    }


    return (
        <div>

            <div className="container">
                <h1>Update</h1>
                <div className="p-3">
                    <div class="form-group">
                        <label>Title</label>
                        <input onChange={(e)=>settitle(e.target.value)} type="text" class="form-control" value={title} />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea onChange={(e)=>setdetail(e.target.value)} class="form-control" rows="3" value={detail}></textarea>
                    </div>
                    <div class="form-group">
                        <img  className="update__image upimage" src={Image} alt="" srcset="" />
                        <label>Ulpode Image</label>
                        <input
                            onChange={(e)=>setImage2(e.target.files[0])}
                            className="form-control"
                            type="file" />
                    </div>
                </div>
                <div>
                    <p onClick={updatePost} className="btn btn-info" >Update</p>
                </div>
            </div>
        </div>
    )
}

export default Update