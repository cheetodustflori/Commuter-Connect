import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CTA_API_KEY;

export default function BusArrivals() {
  const [predictions, setPredictions] = useState([]);
  const [selectedRoutes, setSelectedRoutes] = useState(["8", "60"]);

  const stopIds = ["4618", "4639", "4640", "14487", "18184", "4638"]; // 🔁 Replace with real stop IDs
  const routes = ["8", "60", "156", "18"];

  const handleRouteChange = (rt) => {
    setSelectedRoutes((prev) =>
      prev.includes(rt) ? prev.filter((r) => r !== rt) : [...prev, rt]
    );
  };

  useEffect(() => {
    if (selectedRoutes.length === 0) {
      setPredictions([]);
      return;
    }

    const fetchPredictions = async () => {
      const fetches = [];

      for (const stpid of stopIds) {
        for (const rt of selectedRoutes) {
          const url = `/api/bustime/api/v2/getpredictions?key=${API_KEY}&rt=${rt}&stpid=${stpid}&format=json`;
          fetches.push(fetch(url).then((res) => res.json()));
        }
      }

      const responses = await Promise.all(fetches);
      const all = responses.flatMap(
        (res) => res["bustime-response"]?.prd || []
      );
      setPredictions(all);
    };

    fetchPredictions();
  }, [selectedRoutes]);

  const formatArrivalTime = (prdctdn) => {
    if (prdctdn == "DUE") {
      return "Due";
    } else {
      return `${prdctdn} min.`;
    }
  };

  const formatDirection = (rtdir) => {
    if (rtdir == "Northbound") return "N";
    else if (rtdir == "Southbound") return "S";
    else if (rtdir == "Eastbound") return "E";
    else return "W";
  };

  return (
    <div>
      <div>
        <h2>Choose Bus Routes</h2>
        <div>
          {routes.map((rt) => (
            <label key={rt} style={{ marginRight: "1rem" }}>
              <input
                type="checkbox"
                checked={selectedRoutes.includes(rt)}
                onChange={() => handleRouteChange(rt)}
              />
              Route {rt}
            </label>
          ))}
        </div>
        <ul className="bus-predictions">
          {predictions.map((p, i) => (
            <li key={i}>
              <div>
                <strong>
                  {p.rt} {formatDirection(p.rtdir)}
                </strong>{" "}
                {p.stpnm}
              </div>
              <em>{formatArrivalTime(p.prdctdn)}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
