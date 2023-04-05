from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from sentiment_analysis import predict_sentiment

#Create the Flask app
app = Flask(__name__)

 # Enable CORS for the Flask app
CORS(app) 

#Create a route for the sentiment analysis API
@app.route('/api/sentiment', methods=['POST'])
def get_sentiment():
    text = request.json['text']
    sentiment_result = predict_sentiment(text)
    return jsonify({'sentiment': sentiment_result})


#Run the Flask app on the specified host and port
if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=4000)


