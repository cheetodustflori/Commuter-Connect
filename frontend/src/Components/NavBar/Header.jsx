import React, { useState, useEffect } from "react";
import "../../../styles.css";
import { motion, useScroll , useAnimation} from "framer-motion"

export default function Header() {
  var [date, setDate] = useState(new Date());
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  var day = new Date()
    .toLocaleTimeString("en-us", { weekday: "long" })
    .split(" ")[0];
  var monthDate = new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
  });
  var time = new Date().toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="header">
      <motion.div className='indJobComp'
        whileInView={{ x: 0, // Start at the final position (0)
        opacity: 1,  transition: { duration: 1 }}} initial={{x: '-10vw', opacity: 0}}
        >
          <img className="train" src="src/assets/train.svg"/>
        </motion.div>
        
        <div className="date-details">
          <p className="day">{day}</p>
          <p className="month-date">{monthDate}</p>
          <p className="time">{time}</p>
        </div>
      </div>
    </>
  );
}
