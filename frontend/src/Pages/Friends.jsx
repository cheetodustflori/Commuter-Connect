import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/Nav";
import "./Styles/Friends.css";
import CommuteScheduleRoute from "../Components/Schedule/CommuteScheduleRoute";

export default function Friends() {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userNameSearch, setUserSearch] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  const [friendsRoutes, setFriendsRoutes] = useState([]);
  const [isValid, setIsValid] = useState([]);

  // const handleSearch = async () => {
  //   console.log("Search Button Clicked");
  //   // let path = `/friends`;
  //   if (userNameSearch.length == 0) {
  //     // Array is empty
  //     setIsValid(false);
  //     setSearchResult("No users found");
  //   } else {
  //     // navigate(path);
  //     const trieRes = await getTrieData(userNameSearch);
  //     console.log("RECIEVED TRIE DATA");
  //     console.log(trieRes);
  //     setSearchResult(trieRes || []);
  //   }
  // };

  const handleAdd = () => {
    const trimmedUsername = userNameSearch.trim();
  
    if (
      trimmedUsername.length === 0 ||
      friendsData.includes(trimmedUsername)
    ) {
      return; // Don't add empty or duplicate usernames
    }
  
    setFriendsData((prev) => [...prev, trimmedUsername]);
    setUserSearch(""); // Clear input
    setSearchResult([]); // Clear autocomplete results
  };
  

  async function getTrieData(query) {
    let response = await fetch(
      `http://127.0.0.1:5000/getFriendsAuto?userSearch=${query}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    let res = await response.json();
    return res;
  }

  useEffect(() => {
    async function fetchFriends() {
      try {
        const friends = await loadUserFriends();
        setFriendsData(friends);

        // Fetch each friend's routes
        const routesData = {};
        for (const friend of friends) {
          const friendRoutes = await loadUserRouteSettings(friend);
          routesData[friend] = friendRoutes;
          console.log(routesData[friend]);
        }

        setFriendsRoutes(routesData);
      } catch (error) {
        console.error("Error loading friends or routes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFriends();
  }, []);

  async function loadUserFriends() {
    let response = await fetch(`http://127.0.0.1:5000/getFriends`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    let data = await response.json();
    console.log("Friends fetched:", data);
    return data;
  }

  async function loadUserRouteSettings(friendUsername) {
    try {
      let response = await fetch(
        `http://127.0.0.1:5000/getSavedRoutes?userID=${friendUsername}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.warn(`No routes found for ${friendUsername}`);
        return [];
      }

      let data = await response.json();
      // const allRoutes = [];

      console.log(data.routes);

      // for (const day in data.routes) {
      //   if (data.routes.hasOwnProperty(day)) {
      //     const dayRoutes = data.routes[day].routes || [];
      //     allRoutes.push(...dayRoutes);
      //   }
      // }

      // console.log(`Routes for ${friendUsername}:`, allRoutes);
      // return allRoutes;
    } catch (error) {
      console.error("Error fetching routes for", friendUsername, error);
      return [];
    }
  }

  return (
    <>
      <NavBar />
      <section className="friends-section">
        <div className="friends-column">
          <div className="friends-title">
            <h1 className="page-title">Your Friends</h1>
            <p className="friend-count">({friendsData.length})</p>
          </div>
          {/* FIND FRIENDS */}
          <div className="friends-list">
            <div className="find-friends">
              <label className="custom-field">
                <input
                  name="username-input"
                  placeholder="&nbsp;"
                  value={userNameSearch}
                  onChange={(e) => {
                    const input = e.target.value;
                    setUserSearch(input);
                    if (input.length > 0) {
                      getTrieData(input).then(res => setSearchResult(res.Result || []));
                    } else {
                      setSearchResult([]);
                    }
                  }}                  
                />{" "}
                <span className="placeholder">Enter Username Here</span>
              </label>
              <ul id="autocomplete-results">
                {searchResults.map((username, idx) => (
                  <li key={idx} onClick={() => setUserSearch(username)}>
                    {username}
                  </li>
                ))}
              </ul>

              <button id="search-friend" onClick={handleAdd}>
                Add Friend
              </button>
              {/* <button id="add-friend">Add Friend +</button> */}
            </div>
            <div className="friends">
              {friendsData.map((friendUsername, i) => (
                <ul key={i}>
                  <li>{friendUsername}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="friends-commute-section">
          <h1 className="page-title">Your Friends' Commute Schedules</h1>
          <div className="friends-schedule">
            {friendsData.map((friendUsername, i) => (
              <div className="friend-schedule-block" key={i}>
                <h3>{friendUsername}</h3>

                <CommuteScheduleRoute
                  isActive={false}
                  totalTime={100}
                  // overallTime={"20"}
                  routeTitle={"Home to UIC"}
                  routeStatus={"Upcoming"}
                  startLocation={"5200 S Lake Park Ave, Chicago, IL"}
                  endLocation={"1200 W Harrison St, Chicago, IL"}
                  departTime={"4:15"}
                  arrivalTime={"5:15"}
                  buddies={[]}
                  editMode={false}
                />

                {/* {friendsRoutes[friendUsername] && friendsRoutes[friendUsername].length > 0 ? (
                  <ul className="route-list">
                    {friendsRoutes[friendUsername].map((route, j) => (
                      <li key={j}>
                        <CommuteScheduleRoute
                          isActive={false}
                          totalTime={100}
                          overallTime={route.departTime}
                          routeTitle={route.commuteTitle}
                          routeStatus={"Upcoming"}
                          startLocation={route.departLocation}
                          endLocation={route.arrivalLocation}
                          departTime={route.departTime}
                          arrivalTime={"-"}
                          buddies={route.friends || []}
                          editMode={false}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-routes">No routes available.</p>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
