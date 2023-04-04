import json
import pytest
from sentiment_analysis import sentiment
from app import app

# Test the sentiment analysis model
def test_positive_sentiment():
    text = "I love this product!"
    assert sentiment(text) == "POSITIVE"

def test_negative_sentiment():
    text = "I hate this product!"
    assert sentiment(text) == "NEGATIVE"

# Test the Flask app API
@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_get_sentiment(client):
    response = client.post('/api/sentiment', data=json.dumps({'text': 'I love this product!'}), content_type='application/json')
    assert response.status_code == 200
    assert response.json["sentiment"] == "POSITIVE"

    response = client.post('/api/sentiment', data=json.dumps({'text': 'I hate this product!'}), content_type='application/json')
    assert response.status_code == 200
    assert response.json["sentiment"] == "NEGATIVE"
