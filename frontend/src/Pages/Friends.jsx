
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import "./Styles/Friends.css";
import FriendsData from "../components/Friends/friends.json";
import CommuteScheduleRoute from "../Components/Schedule/CommuteScheduleRoute";

export default function Friends() {
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

  // if (loading) {
  //   return (
  //     <>
  //       <NavBar />
  //       <div>Loading friends data...</div>
  //     </>
  //   );
  // }

return (
    <>
      <NavBar />
      <section className="friends-section">
        <div className="friends-column">
          <div className="friends-title">
            <h1 className="page-title">Your Friends</h1>
            <p className="friend-count">({friendsData.length})</p>
          </div>

          <div className="friends-list">
            <div className="find-friends">
              <input
                id="username-input"
                name="friend_username"
                placeholder="Enter Username Here"
              />
              <button id="add-friend">Add Friend +</button>
            </div>
            <div className="friends">
              {friendsData.map((FriendsDataUsername, i) => (
                <ul key={i}>
                  <li>{FriendsDataUsername}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="friends-commute-section">
          <h1 className="page-title">Your Friends' Commute Schedules</h1>
          <div className="friends-schedule">
            {friendsData.map((friend, i) => (
              <div className="friend-schedule-block" key={i}>
                <h3>{friend.username}</h3>

                {friend.routes && friend.routes.length > 0 ? (
                  <ul className="route-list">
                    {friend.routes.map((route, j) => (
                      <li key={j}>
                        <CommuteScheduleRoute
                          isActive={route.isActive === "true"}
                          totalTime={route.totalTime}
                          overallTime={route.overallTime}
                          routeTitle={route.routeTitle}
                          routeStatus={route.routeStatus}
                          startLocation={route.startLocation}
                          endLocation={route.endLocation}
                          departTime={route.departTime}
                          arrivalTime={route.arrivalTime}
                          buddies={[]} 
                          editMode={false} 
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-routes">No routes available.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
