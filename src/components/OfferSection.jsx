import React from "react";
import OfferCard from "./OfferCard";
import bed_room from "../assets/bed_room.jpg";
import pool_image from "../assets/Pool_image.jpg";
import wedding_image from "../assets/wedding_iamge.jpg";

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      imageUrl: bed_room,
      title: "Rooms & Suites",
      heading: "Miracle Mirage Circle Exclusive Member Rate with Breakfast",
      description:
        "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
      price: "From SGD 240.12 Average Per Night",
    },
    {
      id: 2,
      imageUrl: pool_image,
      title: "Rooms & Suites",
      heading: "Miracle Mirage Circle Circle Exclusive Member Rate",
      description: "Exclusive Member Rate for Shangri-La Circle member.",
      price: "From SGD 213.44 Average Per Night",
    },
    {
      id: 3,
      imageUrl: wedding_image,
      title: "Weddings",
      time: "01 Jan 2023 - 31 Dec 2023",
      heading: "Engagements and Registrations 2023",
      description:
        "Begin your journey to matrimony with an intimate event for your loved ones.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen mt-24">
      <h2 className="text-blue-700 text-3xl font-bold mb-8">Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            imageUrl={offer.imageUrl}
            title={offer.title}
            heading={offer.heading}
            description={offer.description}
            price={offer.price}
            time={offer.time}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
