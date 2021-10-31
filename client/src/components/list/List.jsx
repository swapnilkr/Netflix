import "./list.scss"
import {ArrowBackIosOutlined,ArrowForwardIos} from "@material-ui/icons"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

export default function List() {

    // if we have 10 slides so after few clicks we will ran out of slides to handle this error we create function to repeat after finish
    const [isMoved,setIsMoved] = useState(false);
    const [slideNumber,setSlideNumber] = useState(0);

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
                Continue to watch
            </span>

            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="slideArrow left" 
                onClick={()=>handleClick("left")}
                style={{display: !isMoved && "none"}}/>

                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    

                </div>

                <ArrowForwardIos className="slideArrow right" onClick={()=>handleClick("right")}/>
            </div>

        </div>
    )
}
