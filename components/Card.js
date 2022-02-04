import React from "react";

export default function Card(props) {    
    return (
        <article className="card">
            <div className="card-img-container">
                <img src={`../images/${props.experience.coverImg}`} className="card-img"/>                       
                <div className="open-spots">{props.experience.openSpots > 0 ? props.experience.openSpots : "SOLD OUT"}</div>
            </div>
            <div className="card-score-div">                
                <img src="../images/star.png" className="star"/> 
                <p className="experience-score">{props.experience.stats.rating}</p>
                <p className="review-count">({props.experience.stats.reviewCount})</p>
                <p className="location">{props.experience.location}</p>
            </div>
            <p className="experience-description">{props.experience.title}</p>
            <p className="experience-price"><strong>From ${props.experience.price}</strong></p>   
        </article>
    )
}