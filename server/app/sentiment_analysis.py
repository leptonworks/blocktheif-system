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


#Load the training data from file and display its first few rows
data = pd.read_csv(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'train.tsv'), sep="\t")

data.head()

#Select only the tweet and label columns from the data
data = data[['tweet','label']]

data.head()

# data cleaning
#for cleaning the text of the tweets
stopwords = stopwords.words('english')

def tweet_cleaner(tweet):
    tweet = re.sub(r"@\w*", " ", str(tweet).lower()).strip() #removing username
    tweet = re.sub(r'https?://[A-Za-z0-9./]+', " ", str(tweet).lower()).strip() #removing links
    tweet = re.sub(r'[^a-zA-Z]', " ", str(tweet).lower()).strip() #removing sp_char
    tw = []
    
    for text in tweet.split():
        if text not in stopwords:
            tw.append(text)
    
    return " ".join(tw)

#Clean the tweet text in the data
data.tweet = data.tweet.apply(lambda x: tweet_cleaner(x))

data.head()

# text to sequence
#Convert text to sequence using the Tokenizer
tokenizer = Tokenizer(num_words=3000)
tokenizer.fit_on_texts(data['tweet'].values)
X = tokenizer.texts_to_sequences(data['tweet'].values)
X = pad_sequences(X)

X.shape

#Get the categorical labels for the data
Y = pd.get_dummies(data['label']).values

# model
#   Define the neural network model using Keras
model = Sequential()
model.add(Embedding(3000, 200,input_length = X.shape[1]))
model.add(SpatialDropout1D(0.25))
model.add(LSTM(150, dropout=0.2, recurrent_dropout=0.2))
model.add(Dense(3,activation='softmax'))
model.compile(loss = 'categorical_crossentropy', optimizer='adam',metrics = ['accuracy'])

#Display the model summary
print(model.summary())

#Train the model on the training data
model.fit(X, Y, epochs = 4, batch_size=32, verbose = 2)

#Define a function for predicting the sentiment of a text input
def sentiment(text):
    
    x_test = pad_sequences(tokenizer.texts_to_sequences([text]), maxlen=96)
    score = model.predict([x_test])[0]
    
    if np.argmax(score) == 2:
        a = "POSITIVE"
    elif np.argmax(score) == 0:
        a = "NEGATIVE"
    elif np.argmax(score) == 1:
        a = "NEUTRAL"
    return a