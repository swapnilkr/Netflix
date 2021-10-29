import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import Featured from "../components/featured/Featured"

const Home = () => {
    return (
        <div className="home">
            {/* components */}
            <Navbar/>
            {/* props */}
            <Featured type="movie"/>
        </div>
    )
}

export default Home
