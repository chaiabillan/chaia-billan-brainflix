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
            <span className="nav-bar__picture1"></span>
        </div>
        <div className = "nav-bar__upload">
            <div className = "nav-bar__upload--button">
                    <img className="nav-bar__upload--button--icon"src={upload} alt="upload-icon" />            
                    <p className="nav-bar__upload--button--upload">UPLOAD</p>
            </div>
            <div className = "nav-bar__upload--picture">
                <span className="nav-bar__picture"></span>
            </div>
        </div>
        
    </nav>
    )
}

export default Navbar