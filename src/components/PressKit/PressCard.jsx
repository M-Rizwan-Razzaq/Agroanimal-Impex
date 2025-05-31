import React, { useState } from 'react';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

const PressCard = ({ press }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const isImage = press.image?.match(/\.(jpeg|jpg|png|gif)$/i);
  const isPDF = press.image?.match(/\.pdf$/i);
  const isWord = press.image?.match(/\.(doc|docx)$/i);

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div
          className="w-full h-48 flex items-center justify-center cursor-pointer bg-gray-100"
          onClick={(isImage || isPDF) ? openModal : undefined}
        >
          {isImage ? (
            <img
              src={press.image}
              alt={press.title}
              className="object-cover h-full w-full"
            />
          ) : isPDF ? (
            <FaFilePdf className="text-red-600 text-6xl" />
          ) : isWord ? (
            <FaFileWord className="text-blue-600 text-6xl" />
          ) : (
            <span className="text-gray-500">Unsupported File</span>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold">{press.title}</h3>
          <p className="text-sm text-gray-600">
            {press.date} — {press.author}
          </p>
          <p className="mt-2 text-gray-700 text-sm">{press.description}</p>
        </div>
      </div>

      {(isOpen && (isImage || isPDF)) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white max-w-4xl w-[90%] h-[90%] rounded-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-800 hover:text-red-500 text-2xl font-bold z-50"
            >
              X
            </button>

            {isImage ? (
              <img
                src={press.image}
                alt={press.title}
                className="max-w-full max-h-full object-contain mx-auto p-4"
              />
            ) : (
              <iframe
                src={press.image}
                title={press.title}
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PressCard;
