import "./listItem.scss"
import {ThumbDownAltOutlined, ThumbUpAltOutlined, Add, PlayArrow } from "@material-ui/icons"
import { useRef, useState } from "react";

export default function ListItem({index}) {
    const [isHovered,setIsHovered] = useState(false);

    // after 2018 youtybe changed policy to autoplay you need to put it on mute
    const trailer = "https://www.youtube.com/embed/qlcWFoNqZHc?autoplay=1&mute=1&loop=1&controls=1";
    return (
        
            <div className="listItem" 
            style={{left: isHovered && index *225-50 + index * 2.5}}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
                <img src="https://wallpapercave.com/wp/wp1558784.jpg" alt=""/>
                {isHovered && (
                    // react fragments to allowing you to have multiple top-most elements without wrapping further HTML.
                    <>
                        <iframe src={trailer} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                    
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownAltOutlined className="icon"/>
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
                
                    </>
                )}
                
            </div>
        
    )
}
