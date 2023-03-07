// import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';

// function manuDashboard() {
//     const [qrCode, setQrCode] = useState(null);

//   const handleScan = (result) => {
//     if (result) {
//       setQrCode(result);
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       setQrCode(event.target.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <h1>QR Scanner</h1>
//       <div>
//         <QrReader
//           delay={300}
//           onError={handleError}
//           onScan={handleScan}
//           style={{ width: '100%' }}
//         />
//       </div>
//       <div>
//         <input type="file" accept="image/*" onChange={handleFileUpload} />
//       </div>
//       {qrCode && <p>{qrCode}</p>}
//     </div>
//   );
// }

// export default manuDashboard
