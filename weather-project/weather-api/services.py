import requests
from redisClient import redis_client
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY=os.getenv('API_KEY')

def fetchWeatherCoordinates(lat,lng):
    try:
        
        api_url = f'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{lat},{lng}?key={API_KEY}'
        response = requests.get(api_url)
        
        if response.status_code == 200:
            return response.json()
        else:
            return {"error": f"No se pudo obtener los datos del clima. Status code: {response.status_code}"}
    
    except Exception as e:
        return {"error": str(e)}

def fetchWeatherCoordinatesDates(lat,lng,start_date,end_date):
    try:
        
        api_url = f'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{lat},{lng}/{start_date}/{end_date}?key={API_KEY}'
        
        response = requests.get(api_url)
        
        if response.status_code == 200:
            return response.json()
        else:
            return {"error": f"No se pudo obtener los datos del clima. Status code: {response.status_code}"}
    
    except Exception as e:
        return {"error": str(e)}
