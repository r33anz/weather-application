import React,{useState } from 'react';
import MapComponent from '../components/MapComponent';
import '../styles/home.css' 
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import FormComponent from '../components/FormComponent';
import { submitCoordinates,submitFormData } from '../services/formService';
import Modal from '../components/ModalComponent';

function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 51.505, lng: -0.09 });
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modaData, setModaData] = useState(null)

  const handleSubmitWithDates = async ({ startDate, endDate, coordinates }) => {
    try {
      const data = { startDate, endDate, coordinates };
      const result = await submitFormData(data);
      const {description,alerts,currentCondition} = result;
      const formattedResult = {description,alerts,currentCondition}
      setModaData(formattedResult)
      setIsModalOpen(true)
      console.log("Respuesta del servicio:", result);
    } catch (error) {
      console.error("Error al enviar las fechas y coordenadas:", error);
    }
  };

  const handleSubmitWithCoordinates = async () => {
    try {
      const result = await submitCoordinates(coordinates);
      const modalData = {
        description : result.description,
        alert: result.alerts,
        conditions : result.currentConditions.conditions, 
        icon: result.currentConditions.icon,
        temp: result.currentConditions.temp
      }

      setModaData(modalData)
      setIsModalOpen(true)
      console.log("Respuesta del servicio de coordenadas:", result);
    } catch (error) {
      console.error("Error al enviar las coordenadas:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModaData(null); 
  };

  return (
    <div className="home-container">
      <div className="warp"> 
        <MapComponent setCoordinates={setCoordinates} className="map-container"  coordinates={coordinates}/>
      </div>

      <div className="coordinate-container">
        <h2 className="section-title">Coordinates</h2>
        <CoordinatesDisplay coordinates={coordinates}/>
        <button onClick={handleSubmitWithCoordinates}>Send Coordinates</button>
        <FormComponent coordinates={coordinates}  onSubmit={handleSubmitWithDates}/>
      </div>

      <Modal isOpen={isModalOpen}  isclose={closeModal} data={modaData}/>
    </div>
  );
}

export default Home;
