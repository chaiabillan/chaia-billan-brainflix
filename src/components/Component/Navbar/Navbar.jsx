import './Navbar.scss'
import logo from '../../../assets/Logo/BrainFlix-logo.svg';
import upload from '../../../assets/images/Icons/upload.svg';
import {NavLink} from 'react-router-dom';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> develop


function Navbar() {
    return (
    <nav className = "nav-bar">
        <div className = "nav-bar__logo nav-bar__left">
            <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
        </div>
        <div className= "nav-bar__right">
            <div className = "nav-bar__middle">
                <div className = "nav-bar__middle--search">
                    <input className="nav-bar__middle--search--box regular"type="text" name="search" placeholder="Search"></input>
                </div>
                <div className="nav__bar__middle--picture">
                    <span className="nav-bar__picture1"></span>
                </div>
            </div>
            <div className = "nav-bar__bottom">
                <Link to='/upload'>
                    <div className = "nav-bar__bottom--button">
                        <img className="nav-bar__bottom--button--icon"src={upload} alt="upload-icon" />            
                        <p className="nav-bar__bottom--button--upload demi">UPLOAD</p>
                    </div>
                </Link>
                <div className="nav-bar__bottom--picture">
                    <span className="nav-bar__picture2"></span>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar