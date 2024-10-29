import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Get the current date and time
    const currentDate = new Date();
    const hours = currentDate.getHours();

    // Set the greeting based on the time of day
    if (hours < 12) {
      setGreeting("Good Morning!");
    } else if (hours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }

    // Format the date as "2nd of September 2024"
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    // Function to add 'st', 'nd', 'rd', or 'th' to the date
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th"; // Special case for 11-13
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    setFormattedDate(`${day}${getOrdinalSuffix(day)} of ${month} ${year}`);
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Greeting;
