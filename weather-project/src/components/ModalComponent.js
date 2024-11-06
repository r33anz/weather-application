import React from "react";
import '../styles/modal.css'

const Modal = ({isOpen, isclose, data , isIteactive})=> {
    if(!isOpen) return null;
    
    const iconMapping = {
      "snow": "ac_unit", // Mapea "snow" al ícono "ac_unit" en Google Icon
      "rain": "umbrella",
      "fog": "blur_on",
      "wind": "air",
      "cloudy": "cloud",
      "partly-cloudy-day": "wb_cloudy",
      "partly-cloudy-night": "nights_stay",
      "clear-day": "wb_sunny",
      "clear-night": "nightlight_round",
      // Iconos adicionales de "icons2"
      "snow-showers-day": "ac_unit",
      "snow-showers-night": "ac_unit",
      "thunder-rain": "flash_on",
      "thunder-showers-day": "flash_on",
      "thunder-showers-night": "flash_on",
      "showers-day": "shower",
      "showers-night": "shower"
  };

  const getIcon = (apiIcon) => iconMapping[apiIcon] || "help"; 

    return (
        <div className="modal">
      <div className="modal-content">
        {data.icon && (
          <span className="material-icons weather-icon">
            {getIcon(data.icon)}
          </span>
        )}
        <h2>Weather Details</h2>
        {data.alerts && <div className="alerts">Alerts: {data.alerts}</div>}
        <div className="conditions">Condition: {data.conditions}</div>
        <div className="temperature">Temperature: {data.temp}°F</div>
        <button onClick={isclose}>Close</button>
      </div>
    </div>
    )
}

export default Modal;