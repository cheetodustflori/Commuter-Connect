import React from "react";
import '../../styles.css';

export default function NearbyHeader ({type, title, image}) {
    return (
        <div className="nearby-header" id={type}>
            <div className="nearby-header-title">{title}</div>
            <img src={image}/>
        </div>
    )
}