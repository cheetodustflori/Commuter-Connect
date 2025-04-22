import React, { useEffect } from "react";

const API_KEY = import.meta.env.VITE_CTA_TRAIN_API_KEY;

// curl "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=950451d483a24ec0b37abdfa974bdf82&mapid=40380&max=5&outputType=JSON"
export default function TrainArrivals() {
  useEffect(() => {
    fetch(`/api2/ttarrivals.aspx?key=${API_KEY}&mapid=40380&outputType=JSON`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Train API data:", data);
      })
      .catch((err) => {
        console.error("❌ Error fetching train data:", err);
      });
  }, []);

  return <div> <h2>Choose Train Routes</h2></div>;
}
