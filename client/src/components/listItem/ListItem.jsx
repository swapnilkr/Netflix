import "./listItem.scss"
import {ThumbDownAltOutlined, ThumbUpAltOutlined, Add, PlayArrow } from "@material-ui/icons"
import { useRef, useState } from "react";


export default function ListItem() {
     const [isHovered,setIsHovered] = useState(false);

    return (
        
            <div className="listItem" 
            style={{left: isHovered && index *225-50}}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
                <img src="https://wallpapercave.com/wp/wp1558784.jpg" alt=""/>
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow/>
                        <Add/>
                        <ThumbUpAltOutlined/>
                        <ThumbDownAltOutlined/>
                    </div>
                    <div className="itemInfoTop">
                        <span>
                            1 hour 14 mins
                        </span>
                        <span className="limit">
                             +16
                        </span>
                        <span>
                            1999
                        </span>
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Praesentium hic rem eveniet error possimus, neque ex doloribus.
                    </div>
                    <div className="genre">
                        Action
                    </div>
                </div>
            
            </div>
        
    )
}
