import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutNavbar = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <a href="/">INSERTLOGOHERE</a>
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className='link' to="/?cat=self-development">
                        <h6>SELF-DEVELOPMENT</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logoutNavbar}>LOGOUT</span>
                    ) : (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    )}
                    <span className='write'>
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </span>
                </div>
            </div>
        </div>

    );
};

export default Navbar;