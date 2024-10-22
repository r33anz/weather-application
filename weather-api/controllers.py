import services
from flask import jsonify
from redisClient import redis_client
from dotenv import load_dotenv
import os

load_dotenv()

REDIS_EXPIRATION_SECONDS = os.getenv('REDIS_EXPIRATION_SECONDS')

def weatherCoordinates(lat,lng):
    try:
        redis_key = f"weather:{lat},{lng}"

        weather_data = redis_client.get(redis_key)
        if weather_data:
            return jsonify({"data": weather_data})
    
        weather_data = services.fetchWeatherCoordinates(lat, lng)
        redis_client.set(redis_key, str(weather_data), ex=REDIS_EXPIRATION_SECONDS)
        return jsonify(weather_data), 200
    
    except Exception as e:
        return jsonify({"error": f"Error obteniendo el clima: {str(e)}"}), 500

def weatherCoordinatesDates(lat, lng, start_date, end_date):
    try:

        redis_key = f"weather:{lat},{lng},{start_date},{end_date}"
        weather_data = redis_client.get(redis_key)
        if weather_data:
            return jsonify({"data": weather_data})
        
        weather_data = services.fetchWeatherCoordinatesDates(lat, lng, start_date, end_date)
        redis_client.set(redis_key, str(weather_data), ex=REDIS_EXPIRATION_SECONDS)
        return jsonify(weather_data), 200
    
    except Exception as e:
        return jsonify({"error": f"Error obteniendo el clima con fechas: {str(e)}"}), 500
