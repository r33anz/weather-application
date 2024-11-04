import React from "react";

const CoordinatesDisplay = ({coordinates}) =>{
    return (
        <div className="coordinates-wrapper">
            <div className="coordinate-field">
                <label className="coordinate-label">Latitude: </label>
                <input 
                    type="text" 
                    value={coordinates.lat} 
                    readOnly 
                    className="coordinate-value"
                />
            </div>
            <div className="coordinate-field">
                <label className="coordinate-label">Longitude: </label>
                <input 
                    type="text" 
                    value={coordinates.lng} 
                    readOnly 
                    className="coordinate-value"
                />
            </div>
        </div>
    )
}

export default CoordinatesDisplay; 