import "./listItem.scss"
import {ThumbDownAltOutlined, ThumbUpAltOutlined, Add, PlayArrow } from "@material-ui/icons"
import { useEffect, useState } from "react";
import axios from "axios";


export default function ListItem({index,item}) {
    const [isHovered,setIsHovered] = useState(false);

    const [movie, setMovie] = useState({});

    useEffect(() => {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMovie();
    }, [item]);
    // after 2018 youtybe changed policy to autoplay you need to put it on mute
    const trailer = "https://www.youtube.com/embed/qlcWFoNqZHc?autoplay=1&mute=1&loop=1&controls=1";
    return (
        
            <div className="listItem" 
            style={{left: isHovered && index *225-50 + index * 2.5}}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
                <img src={movie.img}/>
                {isHovered && (
                    // react fragments to allowing you to have multiple top-most elements without wrapping further HTML.
                    <>
                        <iframe src={movie.trailer} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                    
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownAltOutlined className="icon"/>
                            </div>
                            <div className="itemInfoTop">
                                <span>
                                {movie.duration}
                                </span>
                                <span className="limit">
                                {movie.limit}
                                </span>
                                <span>
                                {movie.year}
                                </span>
                            </div>
                            <div className="desc">
                            {movie.desc}
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>
                        </div>
                
                    </>
                )}
                
            </div>
        
    )
}
