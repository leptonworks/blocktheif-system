from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from sentiment_analysis import sentiment

app = Flask(__name__)
CORS(app)  # Enable CORS for the Flask app

@app.route('/api/sentiment', methods=['POST'])
def get_sentiment():
    text = request.json['text']
    sentiment_result = sentiment(text)
    return jsonify({'sentiment': sentiment_result})

if __name__ == '__main__':
    app.run(debug=False)

