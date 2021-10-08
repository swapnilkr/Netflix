import "./Navbar.scss"
import {Search,Notifications,ArrowDropDown} from "@material-ui/icons"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt= "" /> 
                    <span> Homepage</span>
                    <span> Series</span>
                    <span> Movies</span>
                    <span> New and Popular</span>
                    <span> My List</span>
                    
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />

                    <div className="profile">

                        <ArrowDropDown className="icon"/>
                        <div className="options">
                        <span> Settings</span>
                        <span> Logout</span>
                    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
