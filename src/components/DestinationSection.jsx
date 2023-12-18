import React, { useState } from "react";
import hotel_room from "../assets/hotel_room.jpg";

const DestinationSection = () => {
  const [selected, setSelected] = useState("Cinnamon Dhonveli Maldives");

  return (
    <div className="w-full h-[660px] px-12 mt-15 flex flex-col items-center mt-20">
      <label
        htmlFor="destination"
        className="block text-blue-800 text-3xl font-bold mb-8"
      >
        Our Destinations
      </label>
      <div className="w-80 mb-8">
        <select
          id="destination"
          name="destination"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="mt-1 block w-full px-5 py-5 text-base border border-black border-solid focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-1"
        >
          <option>Miracle Mirage Dhonveli Maldives</option>
          <option> Habarana Village by Miracle Mirage</option>
          <option>Miracle Mirage Hakuna Huraa Maldives</option>
          <option>Ellaaidoo Maldives by Miracle Mirage</option>
        </select>
      </div>

      <div className="w-full max-w-[825px] flex flex-row items-center justify-center">
        <img
          src={hotel_room}
          alt="hotel_room_image"
          className="w-[720px] h-[520px] object-cover rounded mr-8"
        />
        <div className="absolute right-[15%] bg-white shadow-[0px_4px_4px_rgba(145,_142,_142,_0.87)] w-[315px] h-[420px] rounded py-6 mt-8">
          <p className="text-xl font-light font-inter text-black text-left px-4 pt-4 pb-8">
            Feel an irrepressible wave of excitement as you have the best
            surfing experience, set to the backdrop of serenity, and pristine
            blue waters.
          </p>
          <button className="px-12 py-2 text-white bg-blue-500 rounded ml-4">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
