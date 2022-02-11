import "./watch.scss";
import {ArrowBackOutlined} from "@material-ui/icons";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            
            <iframe src="https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&mute=1&loop=1&controls=1q"  allow='autoplay'>

            </iframe> 

        </div>
    );
}
