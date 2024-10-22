from flask import Blueprint,jsonify,request,json
from controllers import weatherCoordinates, weatherCoordinatesDates


weather_bp = Blueprint('weather',__name__)

@weather_bp.route('/coordinate', methods=['GET'])
def getWeatherCoordinates():
    try:
        lat = request.args.get('lat')
        lng = request.args.get('lng')

        return weatherCoordinates(lat,lng)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@weather_bp.route('/coordinate/date', methods=['GET'])
def getWeatherCoordinateDate():
    try:
        start_date = request.args.get('startDate')
        end_date = request.args.get('endDate')
        coordinates = request.args.get('coordinates')

        if coordinates:
            coordinates = json.loads(coordinates)
            lat = coordinates.get('lat')
            lng = coordinates.get('lng')
        else:
            return jsonify({"error": "Coordenadas no proporcionadas"}), 400

        print(lat,' ',lng)
        return weatherCoordinatesDates(lat, lng, start_date, end_date)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
