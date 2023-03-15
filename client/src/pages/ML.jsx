import React, { useState } from 'react';
import axios from 'axios';

function ML() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sentiment', {
        text: text,
      });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-4">Sentiment Analysis</h1>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            className="border-2 border-gray-300 p-2 w-full mb-4 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={analyzeSentiment}
            className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
          >
            Analyze Sentiment
          </button>
          {sentiment && (
            <p className="mt-4 text-xl font-semibold">
              Sentiment: {sentiment}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ML;
