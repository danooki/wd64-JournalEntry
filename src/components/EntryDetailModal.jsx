import React, { useState } from "react";
import FullImageModal from "./FullImageModal";

const EntryDetailModal = ({ entryData, onClose, onDelete }) => {
  const [isFullImageOpen, setIsFullImageOpen] = useState(false);

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-lg bg-gray-900/60 flex items-center justify-center z-40"
        onClick={onClose}
      >
        <div
          className="card lg:card-side bg-base-100 shadow-lg max-w-4xl w-full relative"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
        >
          {entryData.imageUrl && (
            <figure
              className="w-full lg:w-1/2 max-h-96 overflow-hidden cursor-pointer"
              onClick={() => setIsFullImageOpen(true)}
            >
              <img
                src={entryData.imageUrl}
                alt="Entry"
                className="object-cover w-full h-full"
              />
            </figure>
          )}

          <div className="card-body w-full lg:w-1/2 p-6">
            <h2 className="card-title text-2xl font-bold">{entryData.title}</h2>
            <small className="text-sm text-gray-500 mb-2">
              {entryData.date}
            </small>
            <p className="whitespace-pre-line mb-4">{entryData.body}</p>
            <span className="badge badge-outline w-fit">{entryData.mood}</span>

            <div className="card-actions justify-end mt-6">
              <button className="btn btn-error" onClick={onClose}>
                Close
              </button>
              <button
                className="btn btn-neutral btn-dash"
                onClick={() => {
                  const confirmed = window.confirm(
                    "WARNING! Are you sure you want to delete this entry forever from your memories?"
                  );
                  if (confirmed) {
                    onDelete(entryData); // esta función viene desde App y solo se encarga de ejecutar la lógica (sin lógica visual)
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {isFullImageOpen && (
        <FullImageModal
          imageUrl={entryData.imageUrl}
          onClose={() => setIsFullImageOpen(false)}
        />
      )}
    </>
  );
};

export default EntryDetailModal;
