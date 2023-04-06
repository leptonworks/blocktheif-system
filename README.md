Fake Product Identification System Utilizing Blockchain Technology

Overview
The proposed project aims to develop a fake product identification system utilizing blockchain technology. The primary objective of this system is to secure product details within the blockchain, ensuring that consumers can verify the authenticity of the products they purchase.

Features
The system will have two main roles: Manufacturers and Users. Manufacturers are responsible for creating, updating, deleting, and tracking analytics of their products within the system. Users are consumers who purchase these products and use the system to authenticate their purchases.

To facilitate product authentication, each product will be assigned a unique QR code that users can scan to confirm its legitimacy. The system will leverage smart contracts to outline specific functionalities for Manufacturers and Users.

Additionally, the system will feature a review mechanism, allowing users to leave feedback on products they have scanned. A machine learning model will be implemented to perform sentiment analysis on these reviews, categorizing them accordingly.

Technologies
The project's frontend will be developed using React.js and Tailwind CSS, while the blockchain infrastructure will be built with Hardhat. Hardhat's provided wallet accounts will be utilized for transactions, and the Ethers.js library will be employed to deploy and interact with the smart contracts.

The database is built with MongoDB to store user and manufacturer credentials with reviews of each product linked to the productID. The machine learning model is built as a sentiment analysis model using a deep learning approach with the Keras library in Python trained using open-source dataset retrieved from Kaggle which is made by scraping Reddit and Twitter data.

Usage
To run the project, follow these steps:

Clone the repository
Navigate to the project directory
Install dependencies using npm install
Run the frontend using npm start
Start the backend server using npx hardhat node
Start the Mongodb server using node app.js
Conclusion
This project aims to create a secure and reliable system for users to verify the authenticity of the products they purchase. The implementation of blockchain technology, smart contracts, and machine learning will ensure that the system is efficient and effective.




Packages    -    Client   - npm install 
                            npm install react-icons --save
                            npm i react-router-dom


                            npm i @mui/icons-material
                            npm install recharts
                            npm install react-modal
                            npm install react-number-format
                            npm install @mui/material@latest @emotion/react@latest @emotion/styled@latest
                            npm install @mui/icons-material@latest
                            npm i react-qr-reader
                            npm i react-toastify
                            npm i axios
                            npm i reactstrap



       Contract          -  npx hardhat run scripts/sample-script.js --network localhost 
                            npx hardhat test
                            npx hardhat node
