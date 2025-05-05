import React, { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format, subMonths, addMonths, getDay } from "date-fns";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const getRandomDots = (days) => {
  const dotColors = ["bg-red-500", "bg-green-500", "bg-yellow-500"];
  const dotDates = {};
  days.forEach((day) => {
    if (Math.random() < 0.25) {  
      dotDates[format(day, "yyyy-MM-dd")] = dotColors[Math.floor(Math.random() * dotColors.length)];
    }
  });
  return dotDates;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [randomDots, setRandomDots] = useState({}); 
  
  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  
  const changeMonth = (direction) => {
    const newDate = direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1);
    setCurrentDate(newDate);
    setSelectedDate(format(newDate, "yyyy-MM-dd"));
  };

  useEffect(() => {
    setRandomDots(getRandomDots(days)); 
  }, [currentDate]);

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const firstDayIndex = getDay(firstDay);

  return (
    <div className="bg-white p-0.5 rounded-md shadow-md w-full">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full px-3">
          <button className="text-gray-500 hover:text-black" onClick={() => changeMonth("prev")}>
            <MdKeyboardArrowLeft />
          </button>
          <h2 className="text-lg font-bold text-gray-700">{format(currentDate, "MMMM yyyy")}</h2>
          <button className="text-gray-500 hover:text-black" onClick={() => changeMonth("next")}>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="pt-0.1 grid grid-cols-7 text-center font-medium text-gray-400 w-full">
          {weekdays.map((day, index) => (
            <div key={index} className="p-0.2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-sm text-center w-full">
          {Array.from({ length: firstDayIndex }).map((_, index) => (
            <div key={`empty-${index}`} className="w-full"></div>
          ))}

          {days.map((day) => {
            const formattedDay = format(day, "yyyy-MM-dd");
            const isSelected = formattedDay === selectedDate;

            return (
              <div
                key={formattedDay}
                className={`relative flex items-center justify-center cursor-pointer w-9 h-9 rounded-full
                  ${isSelected ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}
                `}
                onClick={() => setSelectedDate(formattedDay)}
              >
                {format(day, "d")}
                {randomDots[formattedDay] && (
                  <span className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${randomDots[formattedDay]}`}></span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
