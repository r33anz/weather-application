from flask import Flask, jsonify, request
from flask_cors import CORS
from weather_bp import weather_bp
from dotenv import load_dotenv
import os
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address 


load_dotenv()

PORT = os.getenv('PORT')
app = Flask(__name__)
CORS(app)

limiter = Limiter(
    get_remote_address,  # Limita por dirección IP
    app=app,             # La instancia de Flask
    default_limits=["200 per day", "50 per hour","4 per minute"]  # Limitar 200 solicitudes al día, 50 por hora
)

app.register_blueprint(weather_bp)

if __name__ == '__main__':
    app.run(port=PORT)
