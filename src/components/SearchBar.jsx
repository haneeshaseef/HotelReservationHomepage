import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPerson,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const handleSelect = (ranges) => {
  console.log(ranges);
};

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="flex items-center h-16 bg-white border-solid p-4 rounded gap-10">
      <div className="flex items-center space-x-4 flex-shrink-0">
        <FontAwesomeIcon icon={faSearchLocation} className="text-gray-300" />
        <input
          type="text"
          placeholder="Find a city, hotel, or destination?"
          className="border-none focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faCalendar} className="text-gray-300" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text-gray-300 hover:cursor-pointer"
        >{`${format(selectionRange.startDate, "MM/dd/yyyy")} to ${format(
          selectionRange.endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            className="absolute top-14"
          />
        )}
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faPerson} className="text-gray-300" />
        <span
          className="text-gray-300 cursor-pointer"
          onClick={() => setOpenOption(!openOption)}
        >{`${options.adults} adult . ${options.children} children . ${options.room} rooms`}</span>
        {openOption && (
          <div className="absolute top-14 bg-white text-gray-400 rounded p-4 border border-solid space-x-4">
            <div className="flex justify-center m-2 gap-4">
              <span>Adult</span>
              <div className="flex items-center gap-4 text-lg">
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("adults", "d")}
                  disabled={options.adults <= 1}
                >
                  -
                </button>
                <span>{options.adults}</span>
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("adults", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-center m-2 gap-4">
              <span>Children</span>
              <div className="flex items-center gap-4 text-lg">
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("children", "d")}
                  disabled={options.children <= 0}
                >
                  -
                </button>
                <span>{options.children}</span>
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-center m-2 gap-4">
              <span>Rooms</span>
              <div className="flex items-center gap-4 text-lg">
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("room", "d")}
                  disabled={options.room <= 1}
                >
                  -
                </button>
                <span>{options.room}</span>
                <button
                  className="border border-solid p-2"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center ml-14">
        <button className="px-12 py-3 text-white bg-blue-500 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
