import React,{useState } from 'react';
import MapComponent from '../components/MapComponent';
import '../styles/home.css' 
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import FormComponent from '../components/FormComponent';
import { submitCoordinates,submitFormData } from '../services/formService';

function Home() {
  const [coordinates, setCoordinates] = useState({ lat: 51.505, lng: -0.09 });

  const handleSubmitWithDates = async ({ startDate, endDate, coordinates }) => {
    try {
      const data = { startDate, endDate, coordinates };
      const result = await submitFormData(data);
      console.log("Respuesta del servicio:", result);
    } catch (error) {
      console.error("Error al enviar las fechas y coordenadas:", error);
    }
  };

  const handleSubmitWithCoordinates = async () => {
    try {
      const result = await submitCoordinates(coordinates);
      console.log("Respuesta del servicio de coordenadas:", result);
    } catch (error) {
      console.error("Error al enviar las coordenadas:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="warp"> 
        <MapComponent setCoordinates={setCoordinates} className="map-container"  coordinates={coordinates}/>
      </div>

      <div className="coordinate-container">
        <CoordinatesDisplay coordinates={coordinates}/>
        <button onClick={handleSubmitWithCoordinates}> Enviar Coordenadas </button>
        <FormComponent coordinates={coordinates}  onSubmit={handleSubmitWithDates}/>
      </div>
    </div>
  );
}

export default Home;
