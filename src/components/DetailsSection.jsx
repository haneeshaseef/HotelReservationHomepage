import React from "react";
import DetailCard from "./DetailCard";
import beach_side from "../assets/beach_side.jpg";
import family_out from "../assets/family_out.jpg";
import hotel from "../assets/hotel.jpg";
import family from "../assets/family.jpg";
import hotel_new_room from "../assets/hotel_new_room.jpg";
import party_image from "../assets/Party_image.jpg";

const DetailsSection = () => {
  const cards = [
    {
      id: 1,
      imageUrl: party_image,
      title: "Join Miracle Mirage Honers & Get Up to 4500 Points",
    },
    {
      id: 2,
      imageUrl: beach_side,
      title: "Advance Purchase Discount- Save Up to 17%",
    },
    {
      id: 3,
      imageUrl: family_out,
      title: "Multiply Your Points",
    },
    {
      id: 4,
      imageUrl: hotel,
      title: "Free Bonus Points at New Hotel",
    },
    {
      id: 5,
      imageUrl: family,
      title: "Park & Stay",
    },
    {
      id: 6,
      imageUrl: hotel_new_room,
      title: "Experience the Stay",
    },
  ];

  return (
    <div className="px-12">
      <div className="gap-4 mb-4 mt-12">
        <h2 className="text-blue-700 text-3xl font-bold">
          Wonderful stays await
        </h2>
        <p className="mt-6">
          Indulge in a cozy getaway with our exclusive offers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cards.map((card) => (
          <DetailCard
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;
