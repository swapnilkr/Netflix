import Navbar from "../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <img 
            width="100%"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        </div>
    )
}

export default Home
