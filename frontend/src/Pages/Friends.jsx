import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import "./Styles/Friends.css";
import { Nav } from "react-bootstrap";
import FriendsData from "../components/Friends/friends.json";
import CommuteScheduleRoute from "../Components/Schedule/CommuteScheduleRoute";

export default function Friends() {
  return (
    <>
      <NavBar />
      {/* <div className='friends'>

            <div className='line'></div>

            <div className='listOfFriends'>
                <h2>Your Friends (3)</h2>

                <div>

                    {friends.map((friend, index) => (
                        <div key={index} className='user'>
                            <p>{friend.name}</p>
                        </div>
                        ))}
                </div>
                
            </div>

            <div className='addFriend'>
                <input name="Username" />
                <button id='addFriendButton'>Add Friend</button>
            </div>
        </div> */}

      <section className="friends-section">
        <div className="friends-column">
          <div className="friends-title">
            <h1 className="page-title">Your Friends</h1>
            <p className="friend-count">({FriendsData.length})</p>
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
              {FriendsData.map((FriendsData, i) => (
                <ul key={i}>
                  <li>{FriendsData.username}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="friends-commute-section">
          <h1 className="page-title">Your Friends' Commute Schedules</h1>
          <div className="friends-schedule">
            {FriendsData.map((friend, i) => (
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

async function loadUserFriends() {
  let response = await fetch(`http://127.0.0.1:5000/getFriends?`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  let data = await response.json();

  console.log(data);
  return data;
}

// let friends_array = loadUserFriends();
