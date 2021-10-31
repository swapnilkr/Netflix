import "./listItem.scss"
import {ThumbDownAltOutlined, ThumbUpAltOutlined, Add, PlayArrow } from "@material-ui/icons"

export default function ListItem() {
    return (
        <div>
            <div className="listItem">
                <img src="https://wallpapercave.com/wp/wp1558784.jpg" alt=""/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
            </div>
            
            </div>
        </div>
    )
}
