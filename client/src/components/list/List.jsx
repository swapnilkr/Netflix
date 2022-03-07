import "./list.scss"
import {ArrowBackIosOutlined,ArrowForwardIos} from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

export default function List(lists) {

    // if we have 10 slides so after few clicks we will ran out of slides to handle this error we create function to repeat after finish
    const [isMoved,setIsMoved] = useState(false);
    const [slideNumber,setSlideNumber] = useState(0);

    // since there is no way to call as element.byid we used yse ref
    const listRef = useRef();
    
    // function to handle left and right arrow click
    const handleClick =(direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x+-50;
        if (direction=="left"  && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`;
        }
        if (direction=="right"  && slideNumber <5 ){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230+distance}px)`;
        }
    }

    return (
        <div className="list">
            <span className="listTitle">
                {lists.title}
            </span>

            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="slideArrow left" 
                onClick={()=>handleClick("left")}
                style={{display: !isMoved && "none"}}/>

                <div className="container" ref={listRef}>
                {lists.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
                    

                </div>

                <ArrowForwardIos className="slideArrow right" onClick={()=>handleClick("right")}/>
            </div>

        </div>
    )
}
