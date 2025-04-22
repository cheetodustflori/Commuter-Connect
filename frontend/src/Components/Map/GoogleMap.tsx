import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import React from "react";
import { createRoot } from "react-dom/client";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const App = () => (
  <APIProvider
    apiKey={API_KEY || ""}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <Map
      style={{ width: "100%", height: "500px" }}
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    />
    ƒ
  </APIProvider>
);

export default App;
