
const API_PROTOCOL = process.env.REACT_APP_API_PROTOCOL ;
const API_HOST = process.env.REACT_APP_API_HOST;
const API_PORT = process.env.REACT_APP_API_PORT;

const API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

export const submitFormData = async (data) => {
    console.log(data)
    try {
      const coordinates = JSON.stringify(data.coordinates);
        const queryParams = new URLSearchParams({
            ...data,
            coordinates // Agrega coordinates como una cadena JSON
        }).toString();
      
        const url = `${API_URL}/coordinate/date?${queryParams}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: null, 
          });
      
          if (!response.ok) {
            throw new Error('Error al enviar los datos');
          }
      
          return await response.json();
    } catch (error) {
      console.error('Error en la llamada al servicio:', error);
      throw error; 
    }
  };
  
  export const submitCoordinates = async (coordinates) => {
    //console.log(coordinates)
    try {
        const queryParams = new URLSearchParams(coordinates).toString();
        const url = `${API_URL}/coordinate?${queryParams}`;
    
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al enviar las coordenadas');
        }
    
        return await response.json();
    } catch (error) {
      console.error('Error en la llamada al servicio:', error);
      throw error; 
    }
  };
  