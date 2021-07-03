//modules
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//files
import './Navbar.scss'

//components
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const Navbar: React.FC = () => {

    const [loggedIn, setloggedIn] = useState<boolean>(false)

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__left">
                    <button className="navbar__menu-button">
                        <MenuIcon className="navbar__icon"/>
                    </button>
                    <YouTubeIcon className="navbar__icon" id="youtube-icon"/>
                    <Link to="/" className="navbar__logo">
                        YouTube
                    </Link>
                </div>
                <div className="navbar__center">
                    <input type="text" className="navbar__search-bar" placeholder="Search"/>
                    <button className="navbar__search-button"><SearchIcon/></button>
                </div>
                <div className="navbar__right">
                    <button className="navbar__create-button"><VideoCallIcon className="navbar__icon"/></button>
                    {loggedIn ? (
                        <button className="navbar__profile-button">
                            <div className="navbar__profile"></div>
                        </button>
                    ) : (
                        <Link to="/signin">
                            <button className="navbar__sign-in">
                                Sign In
                            </button>
                        </Link>
                        
                    )
                }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
