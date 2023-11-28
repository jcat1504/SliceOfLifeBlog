import React, { useState } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
    const state = useLocation().state;

    const [title, setTitle] = useState(state?.title || "");
    const [value, setValue] = useState(state?.desc || "");
    const [file, setfile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate();

    const upload = async() => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await axios.post("/upload", formData);

            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async(e) => {
        e.preventDefault();

        const imageUrl = await upload();
        try {
            state ? await axios.put(`/posts/${state.id}`, {
                title,
                desc: value,
                cat,
                img: file ? imageUrl : "",
            }) : await axios.post(`/posts/`, {
                title,
                desc: value,
                cat,
                img: file ? imageUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD:mm:ss"),
            });

            navigate("/");
        } catch(err) {
            console.log(err);
        }
     };
    
    return (
        <div className="add">
            <div className="content">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className="editor-container">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public 
                    </span>
                    <input style={{ display: "none"}}
                    type="file"
                    id="file"
                    name=""
                    onChange={(e) => setfile(e.target.files[0])} />
                    <label className="file" htmlFor="file">
                        Upload Image
                    </label>
                    <div className="buttons">
                        <button>Save as a Draft</button>
                    <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    {/* Technology */}
                    <div className="cat">
                        <input type="radio" checked={cat === "technology"}
                        name="cat"
                        value="technology"
                        id="technology"
                        onChange={(e) => setCat(e.target.value)} />
                        <label className="file" htmlFor="file">Technology</label>
                    </div>
                    {/* Self-Development */}
                    <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "self-development"}
                    name="cat"
                    value="self-development"
                    id="self-development"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="self-development">Self-Development</label>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Write;
