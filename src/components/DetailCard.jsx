import React from "react";

const DetailCard = ({ imageUrl, title }) => {
  return (
    <div className="relative group py-2 px-2">
      <div className="relative">
        <img
          className="w-full h-60 object-cover rounded"
          src={imageUrl}
          alt="Card"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
      </div>
      <div className="absolute inset-0 p-3 flex flex-col justify-end items-center transition-transform group-hover:translate-y-[-50%]">
        <h2 className="text-white text-center text-2xl font-bold mb-4 px-4">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default DetailCard;
