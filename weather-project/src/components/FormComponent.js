import React ,  {useState} from 'react';

const FormComponent = ({ coordinates, onSubmit }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ startDate, endDate, coordinates });
      };

    return (
        <div className="form-group">
            <h2 className="section-title">Date Range</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="start-date">Start Date:</label>
                <input 
                type="date" 
                id="start-date" 
                onChange={(e) => setStartDate(e.target.value)} 
                required 
                />
            </div>
            <div>
                <label htmlFor="end-date">End date:</label>
                <input 
                type="date" 
                id="end-date" 
                onChange={(e) => setEndDate(e.target.value)} 
                required 
                />
            </div>
            <button type="submit">Send dates and coordinates</button>
            </form>
        </div>
    );
};

export default FormComponent;
