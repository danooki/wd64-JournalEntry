import React from "react";

const FullImageModal = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full-size image viewer"
    >
      <img
        src={imageUrl}
        alt="Full-size"
        className="max-w-full max-h-full rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking image
      />
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
      >
        &times;
      </button>
    </div>
  );
};

export default FullImageModal;
