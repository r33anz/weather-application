import React from "react";
import '../styles/modal.css'

const Modal = ({isOpen, isclose, data})=> {
    if(!isOpen) return null;

    return (
        <div className="modal">
      <div className="modal-content">
        {data.icon && (
          <span className="material-icons weather-icon">
            {data.icon}
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