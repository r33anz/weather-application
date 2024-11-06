import React from "react";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/modal.css'

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
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={isclose} aria-label="Close">
          <X size={24} />
        </button>

        <div className="modal-content">
          <h2 className="modal-title">Weather Details for {date}</h2>

          {data.icon && (
            <span className="material-icons weather-icon">{getIcon(data.icon)}</span>
          )}

          <div className="weather-details">
            {data.alert && (
              <div className="alert-box">
                <strong>Alert:</strong> {data.alert}
              </div>
            )}

            <div className="info-row">
              <strong>Condition:</strong> {data.conditions}
            </div>

            <div className="info-row">
              <strong>Temperature:</strong> {data.temp}°F
            </div>

            {data.description && (
              <div className="info-row description">
                <strong>Description:</strong> {data.description}
              </div>
            )}
          </div>

          <div className="navigation-controls">
            {hasPrev && (
              <button 
                className="nav-button prev" 
                onClick={onPrev}
                aria-label="Previous day"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            {hasNext && (
              <button 
                className="nav-button next" 
                onClick={onNext}
                aria-label="Next day"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInteractive;