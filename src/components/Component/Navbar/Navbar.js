import './Navbar.scss'
import logo from '../../../assets/Logo/BrainFlix-logo.svg';
import upload from '../../../assets/images/Icons/upload.svg';


function Navbar() {
    return (
    <nav className = "nav-bar">
        <div className = "nav-bar__logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className = "nav-bar__search">
            <input className="nav-bar__search--box"type="text" name="search" placeholder="Search"></input>
            <span className="nav-bar__search--picture"></span>
        </div>
        <div className = "nav-bar__upload">
                <p className="nav-bar__upload--upload">UPLOAD</p>
                <img className="nav-bar__upload--icon"src={upload} alt="upload-icon" />            
        </div>
    </nav>

    )
}

export default Navbar