import React from "react";

function ConfirmationDialog(props) {
  return (


        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg p-5">
        <h3 className="text-lg font-semibold mb-3">Confirmation</h3>
        <p className="text-gray-600">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="mt-5 flex justify-end">
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={props.onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      </div>


  );
}

export default ConfirmationDialog;
