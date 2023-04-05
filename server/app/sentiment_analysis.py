import numpy as np
import pandas as pd
from nltk.corpus import stopwords

from sklearn.feature_extraction.text import CountVectorizer
from keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Dense, Embedding, LSTM, SpatialDropout1D
from sklearn.model_selection import train_test_split
from keras.utils.np_utils import to_categorical
import re
import os

# Read and display training data
data = pd.read_csv(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'train.tsv'), sep="\t")
data.head()

# Choose tweet and label columns
data = data[['tweet', 'label']]
data.head()

# Clean tweet text
stopword_list = stopwords.words('english')

def clean_tweet_text(tweet):
    tweet = re.sub(r"@\w*", " ", tweet.lower()).strip() #remove username
    tweet = re.sub(r'https?://[A-Za-z0-9./]+', " ", tweet.lower()).strip() #remove links
    tweet = re.sub(r'[^a-zA-Z]', " ", tweet.lower()).strip() #remove special characters
    cleaned_tweet = []
    for word in tweet.split():
        if word not in stopword_list:
            cleaned_tweet.append(word)
    return " ".join(cleaned_tweet)

data.tweet = data.tweet.apply(lambda x: clean_tweet_text(x))
data.head()

# Convert text to sequence
text_tokenizer = Tokenizer(num_words=3000)
text_tokenizer.fit_on_texts(data['tweet'].values)
X = text_tokenizer.texts_to_sequences(data['tweet'].values)
X = pad_sequences(X)
X.shape

# Get categorical labels
Y = pd.get_dummies(data['label']).values

# Define neural network model
neural_network_model = Sequential()
neural_network_model.add(Embedding(3000, 200, input_length=X.shape[1]))
neural_network_model.add(SpatialDropout1D(0.25))
neural_network_model.add(LSTM(150, dropout=0.2, recurrent_dropout=0.2))
neural_network_model.add(Dense(3, activation='softmax'))
neural_network_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Show model summary
print(neural_network_model.summary())

# Train model
neural_network_model.fit(X, Y, epochs=4, batch_size=32, verbose=2)

# Function to predict sentiment
def predict_sentiment(text):
    x_test = pad_sequences(text_tokenizer.texts_to_sequences([text]), maxlen=96)
    sentiment_score = neural_network_model.predict([x_test])[0]
    if np.argmax(sentiment_score) == 2:
        sentiment_label = "POSITIVE"
    elif np.argmax(sentiment_score) == 0:
        sentiment_label = "NEGATIVE"
    elif np.argmax(sentiment_score) == 1:
        sentiment_label = "NEUTRAL"
    return sentiment_label


