import redis
from dotenv import load_dotenv
import os

load_dotenv()

redis_client = redis.Redis(
    host=os.getenv('REDIS_HOST'),
    port=os.getenv('REDIS_PORT'),
    db=0,
    decode_responses=True
)

try:
    redis_client.ping()
    print("Conectado a Redis")
except redis.exceptions.ConnectionError as e:
    print(f"Error al conectarse a Redis: {e}")