import React from "react";

export default function Travel(props) {

    

    return(
        <section>
            <div className="travel-container">
                <img src={props.data.imageUrl} alt="" className="travel-img"/>
                <div className="travel-info">
                    <div className="location">
                        <img src="\assets\location-icon.png" alt="path logo" />
                        <p className="location-name">{props.data.location}</p> <span className="google-maps-text">View on Google Maps</span>
                    </div>
                    <h2>{props.data.title}</h2>
                    <p className="date-text">{props.data.startDate} - {props.data.endDate}</p>
                    <p className="description-text">{props.data.description}</p>
                </div>
                <div className="line"></div>
            </div>
            <hr />
        </section>
        
    )
}