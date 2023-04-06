import React from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import _ from 'lodash';

function scannerCam() {
  const [data, setData] = React.useState([]);

  const onCameraUpdate = (err, result) => {
    if (result) {
      setData((prevData) => _.uniq([...prevData, result.text]));
    } else {
      if (data[data.length - 1] !== 'Not Found') {
        setData((prevData) => [...prevData.filter((el) => el !== 'Not Found'), 'Not Found']);
      }
    }
  };

  return (
    <>
      <BarcodeScannerComponent width={500} height={100} onUpdate={onCameraUpdate} />
      <pre>{data.join('\n')}</pre>
    </>
  );
}

export default scannerCam;
