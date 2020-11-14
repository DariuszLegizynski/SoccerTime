import React, { useState } from "react";
import _ from "lodash";

import "./league.css";

const LeagueItem = ({picture, altPicture, altText}) => {
    const [ newSpanSize, setNewSpanSize ] = useState(0);

    let imageHeight;
    
    const handleImageLoad = (event) => {
        imageHeight = event.currentTarget.clientHeight;
        if(_.isEmpty(imageHeight)) {
            setNewSpanSize(Math.ceil(imageHeight / 10 + 1));
        }
    }

    return (
        <figure className="league__gallery__image" style={{ gridRowEnd: `span ${newSpanSize}`}}>
            <img className="league__picture" onLoad={handleImageLoad} src={picture ? picture + "/preview" : altPicture} alt={altText} />
        </figure>
    )
}

export default LeagueItem;