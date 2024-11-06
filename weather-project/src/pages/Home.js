import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import '../styles/home.css';
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import FormComponent from '../components/FormComponent';
import { submitCoordinates, submitFormData } from '../services/formService';
import Modal from '../components/ModalComponent';
import ModalIteractive from '../components/IteractiveModal';

function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 51.505, lng: -0.09 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modaData, setModaData] = useState(null);
  const [isModalIteractiveOpen, setIsModalIteractiveOpen] = useState(false);
  const [modalIteractiveData, setModalIteractiveData] = useState(null);
  const [dates, setDates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmitWithDates = async ({ startDate, endDate, coordinates }) => {
    try {
      const data = { startDate, endDate, coordinates };
      const result = await submitFormData(data);
      const formattedResult = result.days.reduce((acc, day) => {
        acc[day.datetime] = {
          description: day.description,
          alert: day.alerts,
          conditions: day.conditions,
          icon: day.icon,
          temp: day.temp,
        };
        return acc;
      }, {});

      setModalIteractiveData(formattedResult);
      setDates(Object.keys(formattedResult));
      setCurrentIndex(0);
      setIsModalIteractiveOpen(true);
      console.log("Respuesta del servicio:", formattedResult);

    } catch (error) {
      console.error("Error al enviar las fechas y coordenadas:", error);
    }
  };

  const handleSubmitWithCoordinates = async () => {
    try {
      const result = await submitCoordinates(coordinates);
      const modalData = {
        description: result.description,
        alert: result.alerts,
        conditions: result.currentConditions.conditions,
        icon: result.currentConditions.icon,
        temp: result.currentConditions.temp,
      };
      setModaData(modalData);
      setIsModalOpen(true);
      console.log("Respuesta del servicio de coordenadas:", modalData);
    } catch (error) {
      console.error("Error al enviar las coordenadas:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModaData(null);
  };

  const closeModalIteractive = () => {
    setIsModalIteractiveOpen(false);
    setModalIteractiveData(null);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < dates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentDate = dates[currentIndex]; // Fecha actual basada en el índice
  const currentData = dates.length > 0 ? modalIteractiveData[currentDate] : null;

  return (
    <div className="home-container">
      <div className="warp">
        <MapComponent 
          setCoordinates={setCoordinates} 
          className="map-container" 
          coordinates={coordinates} />
      </div>

      <div className="coordinate-container">
        <h2 className="section-title">Coordinates</h2>
        <CoordinatesDisplay coordinates={coordinates} />

        <button onClick={handleSubmitWithCoordinates}>Send Coordinates</button>

        <FormComponent 
          coordinates={coordinates} 
          onSubmit={handleSubmitWithDates} />
      </div>

      <Modal 
        isOpen={isModalOpen} 
        isclose={closeModal} 
        data={modaData} />

      <ModalIteractive 
        isOpen={isModalIteractiveOpen} 
        isclose={closeModalIteractive} 
        data={currentData} 
        date={currentDate} 
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < dates.length - 1} />
    </div>
  );
}

export default Home;
