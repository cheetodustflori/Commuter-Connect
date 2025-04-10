import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CTA_TRAIN_API_KEY;



export default function BusArrivals() {
  fetch(`lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${API_KEY}&outputType=json`).then()
.then((res) => res.json())
.then((data) => {
  console.log(data);
});
   return (
    <div>Hello</div>
   )
}
