import React ,  {useState} from 'react';

const FormComponent = ({ coordinates, onSubmit }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ startDate, endDate, coordinates });
      };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="start-date">Fecha Inicial:</label>
            <input 
            type="date" 
            id="start-date" 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
            />
        </div>
        <div>
            <label htmlFor="end-date">Fecha Final:</label>
            <input 
            type="date" 
            id="end-date" 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
            />
        </div>
        <button type="submit">Enviar Coordenadas y fechas</button>
        </form>
    );
};

export default FormComponent;
