import React from "react";

const CoordinatesDisplay = ({coordinates}) =>{
    return (
        <div>
            <label>Latitude: </label>
            <input type='text' value={coordinates.lat} readOnly /> 
            <br/>
            <label>Longitude: </label>
            <input type='text' value={coordinates.lng} readOnly />
        </div>
    )
}

export default CoordinatesDisplay; 