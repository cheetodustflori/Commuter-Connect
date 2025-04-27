import React, { useState,useEffect } from "react";
import "./Styles/Schedule.css";
import SavedRoute from "./SavedRoute";
import mapsLogo from "../../assets/mapImage.png";
import ScrollableRoutes from "./ScrollableRoutes";

const CommuteRoutes = () => {
  const [createNewRoute, setCreateNewRoute] = useState(false);

  const [isCheckedTrain, setIsCheckedTrain] = useState(false);
  const [isCheckedBus, setIsCheckedBus] = useState(false);
  const [isCheckedWalk, setIsCheckedWalk] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [departTime, setDepartTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const [departLocation, setDepartLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");

  const [commuteTitle, setCommuteTitle] = useState("");

    const [friendsData, setFriendsData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchFriends() {
        try {
          const data = await loadUserFriends();
          setFriendsData(data);
        } catch (error) {
          console.error("Error loading friends:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchFriends();
    }, []);
  
    async function loadUserFriends() {
      let response = await fetch(`http://127.0.0.1:5000/getFriends`, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      console.log(data);
      return data;
    }

  const handleChangeTrain = (event) => {
    setIsCheckedTrain(event.target.checked);
  };

  const handleChangeBus = (event) => {
    setIsCheckedBus(event.target.checked);
  };

  const handleChangeWalk = (event) => {
    setIsCheckedWalk(event.target.checked);
  };

  const handleChange = (event) => {
    const values = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions((prevItems) => [...prevItems, values]);
  };

  const handleExit = () => {
    setCreateNewRoute(!createNewRoute);
    setSelectedOptions([]); // Empties the array
  };

  const handleCreateNewRoute = () => {
    setCreateNewRoute(!createNewRoute);
  };

  const handleShowSavedRoute = () => {
    console.log("clicked");
  };

  //Send to backend
  const handleAddNewRoute = async () => {
    console.log(selectedOptions);
    console.log(departTime);
    console.log(arrivalTime);
    console.log(departLocation);
    console.log(arrivalLocation);
    console.log(commuteTitle);

    const routeData = {
      departLocation:departLocation,
      arrivalLocation:arrivalLocation,
      commuteTitle:commuteTitle,
      selectedOptions:selectedOptions,
      departTime:departTime
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/addRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(routeData),
      });

      const result = await response.json();

        // if (response.status === 409) {
        //     setFail(true);
        //     console.log(result.Message); // "Username already exists!"
        // } else if (response.ok) {
        //     console.log(result.Message); // "Profile successfully sent!"
        //     let path = `/`;
        //     navigate(path);
        // }

    } catch (error) {
      console.error('Error creating route:', error);
      // setResponseMessage('Something went wrong!');
    }

  };

  const savedRoutes = [
    <SavedRoute isFavorite={true} isBus={true} isWalking={true} />,
    <SavedRoute isFavorite={false} isBus={true} isWalking={true} />,
    <SavedRoute isFavorite={true} isBus={true} isWalking={true} />,
    <SavedRoute isFavorite={false} isBus={true} isWalking={true} />,
    <SavedRoute isFavorite={true} isBus={true} isWalking={true} />,
  ];

  return (
    <div
      className="mainCommuteRoutes"
      style={{ gap: createNewRoute ? "100px" : "50px" }}
    >
      <div className="CommuteRoutes">
        <h2>Commute Routes</h2>

        <h3 style={{ fontWeight: "normal" }} id="text">
          Create or click on an existing route to show details and get started
          on your journey!
        </h3>

        <div className="routes">
          <div className="savedRoutesNew">
            {savedRoutes.map((route, index) => (
              <button key={index} id="thisRoute" onClick={handleShowSavedRoute}>
                {route}
                <hr id="horizontalLine"></hr>
              </button>
            ))}
          </div>
        </div>
      </div>

      {!createNewRoute && (
        <>
          <div id="mapAndButton">
            {/* <img id="mapsLogo" src={mapsLogo}/>    */}

            <iframe src="{{embed_url}}"></iframe>
            <button id="newRouteButton" onClick={handleCreateNewRoute}>
              Create New Route
            </button>
          </div>
        </>
      )}

      {createNewRoute && (
        <>
          <div
            className="routeOptions"
            style={{ paddingTop: createNewRoute ? "50px" : "0px" }}
          >
            <div className="writtenInputs">
              <div className="commuteTimes">
                <h3 style={{ fontWeight: "bold" }}>
                  Depart Time:{" "}
                  <input
                    name="myInput"
                    onChange={(e) => setDepartTime(e.target.value)}
                  />{" "}
                </h3>
                <h3 style={{ fontWeight: "bold" }}>
                  Arrival Time:{" "}
                  <input
                    name="myInput"
                    onChange={(e) => setArrivalTime(e.target.value)}
                  />{" "}
                </h3>
              </div>
              <div className="commuteTimes">
                <h3 style={{ fontWeight: "bold" }}>
                  Depart Location:{" "}
                  <input
                    name="myInput"
                    onChange={(e) => setDepartLocation(e.target.value)}
                  />{" "}
                </h3>
                <h3 style={{ fontWeight: "bold" }}>
                  Arrival Location:{" "}
                  <input
                    name="myInput"
                    onChange={(e) => setArrivalLocation(e.target.value)}
                  />{" "}
                </h3>
              </div>

              <h3 style={{ fontWeight: "bold" }}>
                Commute Title:{" "}
                <input
                  name="myInput"
                  onChange={(e) => setCommuteTitle(e.target.value)}
                />{" "}
              </h3>
            </div>

            <div>
              <h3 id="text" style={{ fontWeight: "bold" }}>
                Transportation Modes:
              </h3>

              <div id="options">
                <div id="individualCheckBox">
                  <input
                    type="checkbox"
                    checked={isCheckedTrain}
                    onChange={handleChangeTrain}
                  />
                  <h3>Train</h3>
                </div>

                <div id="individualCheckBox">
                  <input
                    type="checkbox"
                    checked={isCheckedBus}
                    onChange={handleChangeBus}
                  />
                  <h3>Bus</h3>
                </div>

                <div id="individualCheckBox">
                  <input
                    type="checkbox"
                    checked={isCheckedWalk}
                    onChange={handleChangeWalk}
                  />
                  <h3>Walk</h3>
                </div>
              </div>
            </div>

            <div id="addCommuteBuddies">
              <h3 style={{ fontWeight: "bold" }}>Add Commute Buddies: </h3>
              <select
                id="dropdown"
                value={selectedOptions}
                onChange={handleChange}
              >

              {friendsData.map((friend,i) => (
                  <option key={i}>
                    {friend}
                  </option>
                ))}
                {/* <option value="">None Selected</option>
                <option value="Ted">Ted</option>
                <option value="Robin">Robin</option>
                <option value="Lily">Lily</option> */}
              </select>
              <p>{selectedOptions.join(" , ")}</p>
            </div>

            <div id="buttonOptions">
              <button
                id="button"
                onClick={handleExit}
                style={{
                  backgroundColor: "#EAEAEA",
                  color: "black",
                  borderColor: "#EAEAEA",
                }}
              >
                Cancel
              </button>
              <button
                id="button"
                onClick={handleAddNewRoute}
                style={{ backgroundColor: "#769EB8" }}
              >
                Add Route
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommuteRoutes;
