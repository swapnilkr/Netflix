import "./list.scss"
import {ArrowBackIosOutlined,ArrowForwardIos} from "@material-ui/icons"


export default function list() {
    return (
        <div className="list">
            <span className="listTitle">
                Continue to watch
            </span>

            <div className="wrapper">
                <ArrowBackIosOutlined/>

                <div className="container">
                    
                </div>

                <ArrowForwardIos/>
            </div>

        </div>
    )
}
