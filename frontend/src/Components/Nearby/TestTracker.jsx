import { useEffect, useState } from "react";
const BUS_KEY = import.meta.env.VITE_CTA_BUS_API_KEY;
const TRAIN_KEY = import.meta.env.VITE_CTA_TRAIN_API_KEY;

export default function MyComponent() {
  const [weather, setWeather] = useState(null);
  const [friends, setFriends] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [weatherRes, friendsRes] = await Promise.all([
          fetch(`/cta-bus/bustime/api/v2/getpredictions?key=${BUS_KEY}&rt=8&stpid=4618&format=json`),
          fetch(`/cta-train/api/1.0/ttarrivals.aspx?key=${TRAIN_KEY}&mapid=40380&outputType=JSON`)
        ]);
  
        // Optional: debug what came back
        // const weatherText = await weatherRes.text();
        const friendsText = await friendsRes.text();
  
        // console.log("Weather response:", weatherText);
        console.log("Train response:", friendsText);
  
        // const weatherData = JSON.parse(weatherText);
        const friendsData = JSON.parse(friendsText);
  
        // setWeather(weatherData);
        setFriends(friendsData);
      } catch (err) {
        console.error("Failed to load data:", err);
        setError("Something went wrong");
      }
    }
  
    fetchAll();
  }, [])};
