import React from "react";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/modal-iteractive.css'

const iconMapping = {
  "snow": "ac_unit",
  "rain": "umbrella",
  "fog": "blur_on",
  "wind": "air",
  "cloudy": "cloud",
  "partly-cloudy-day": "wb_cloudy",
  "partly-cloudy-night": "nights_stay",
  "clear-day": "wb_sunny",
  "clear-night": "nightlight_round",
  "snow-showers-day": "ac_unit",
  "snow-showers-night": "ac_unit",
  "thunder-rain": "flash_on",
  "thunder-showers-day": "flash_on",
  "thunder-showers-night": "flash_on",
  "showers-day": "shower",
  "showers-night": "shower"
};

const getIcon = (apiIcon) => iconMapping[apiIcon] || "help";

const ModalInteractive = ({ 
  isOpen, 
  isclose, 
  data, 
  date, 
  onPrev, 
  onNext, 
  hasPrev, 
  hasNext 
}) => {
  
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={isclose}>
          <X size={20} />
        </button>

        <div className="modal-content">
          <h2 className="modal-title">Weather Details for {date}</h2>

          {data.icon && (
            <span className="material-icons weather-icon">{getIcon(data.icon)}</span>
          )}

          <div className="weather-info">
            <div className="info-item">
              <span className="label">Condition:</span>
              <span className="value">{data.conditions}</span>
            </div>

            <div className="info-item">
              <span className="label">Temperature:</span>
              <span className="value">{data.temp}°F</span>
            </div>

            {data.description && (
              <div className="info-item">
                <span className="label">Description:</span>
                <span className="value">{data.description}</span>
              </div>
            )}
          </div>

          <div className="navigation-buttons">
            {hasPrev && (
              <button 
                className="nav-button" 
                onClick={onPrev}
              >
                &#8592;
              </button>
            )}
            
            {hasNext && (
              <button 
                className="nav-button" 
                onClick={onNext}
              >
                &#8594;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInteractive;