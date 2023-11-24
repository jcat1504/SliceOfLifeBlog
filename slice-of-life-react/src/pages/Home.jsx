import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    const getText = html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div className="home">
            <div className="posts">
                {/*mapping over posts here */}
                {posts.map((post) => {
                    <div className="post" key={post.id}>
                        <div className="post-img">
                            {/*post img */}
                            <img src={`.../upload/${post.img}`} alt="post img cover" />
                        </div>
                        <div className="content">
                            {/*link to post pg */}
                            <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            </Link>
                            {/*post desc*/}
                            <p>{getText(post.desc)}</p>
                            <Link className="link" to={`/post/${post.id}`}>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Home;