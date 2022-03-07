import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"

const Home = ({type}) => {
    return (
        <div className="home">
            {/* components */}
            <Navbar/>
            {/* props */}
            <Featured type={type}/>

            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
