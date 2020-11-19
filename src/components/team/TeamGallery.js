import React, { useState } from "react";
import _ from "lodash";

import "./team.css";

const TeamGallery = ({picture, altPicture, altText}) => {
    const [ newSpanSize, setNewSpanSize ] = useState(0);

    let imageHeight;

    const handleImageLoad = (event) => {
        imageHeight = event.currentTarget.clientHeight;
        if(_.isEmpty(imageHeight)) {
            setNewSpanSize(Math.ceil(imageHeight / 10 + 1));
        }
    }

    return (
        <figure className="team__gallery__image" style={{ gridRowEnd: `span ${newSpanSize}`}}>
            <img className="team__picture" onLoad={handleImageLoad} src={picture ? picture : altPicture} alt={altText} />
        </figure>
    )
}

export default TeamGallery; 