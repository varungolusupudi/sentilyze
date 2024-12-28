from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def submit_text():
    try:
        data = request.get_json()
        text = data.get('text','')

        return jsonify({
            'status': 'success',
            'message': 'Sentiment Analysis Successful',
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e),
        }), 400

if __name__ == '__main__':
    app.run(debug=True)