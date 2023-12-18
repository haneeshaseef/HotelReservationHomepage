import React from "react";

const OfferCard = ({ imageUrl, title, heading, time, description, price }) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden shadow-lg bg-white rounded-lg">
      <div className="w-full h-64 object-cover w-250">
        <img className="w-full h-full" src={imageUrl} alt="CardImage" />
        <p className="text-center">{title}</p>
        <p className="text-center">{time}</p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">{heading}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <p className="mb-2 pt-12">{price}</p>
        <div className=" px-6 pt-4 pb-6">  
          <button className="px-4 py-2 text-white bg-blue-500 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
