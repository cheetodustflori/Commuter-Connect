import React, { useState, useEffect } from "react";
import "./Styles/Schedule.css";
// import React from 'react'
import './Styles/Schedule.css'
import SavedRoute from './SavedRoute'

// NEED TO CALL USER ROUTES

const ScrollableRoutes = () => {
    const [routes, setRoutes] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
          const userId = await getUserID();
          setUser(userId); // Update the state with the user ID
          console.log(userId);
        };
    
        fetchUser();
      }, []);

      // This function should only be called after the user state has been updated.
        useEffect(() => {
          if (user) {
            loadUserRouteSettings(user); // Call loadUserRouteSettings after user is updated
          }
        }, [user]); // Only run this effect when user changes
      
        async function getUserID() {
          let response = await fetch(`http://127.0.0.1:5000/getUsername`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
      
          let data = await response.json();
          console.log(data);
          return data["user"];
        }

        async function loadUserRouteSettings(user) {
            let response = await fetch(
              `http://127.0.0.1:5000/getUsersRoutes?userID=${user}`,
              {
                method: "GET",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
        
            let data = await response.json();
        
            console.log(data);
        
            // Function to convert time string to Date object for comparison
            const parseTimeString = (timeString) => {
              const [time, period] = timeString.split(" ");
              const [hours, minutes] = time.split(":");
              let hours24 = parseInt(hours, 10);
        
              if (period === "PM" && hours24 !== 12) {
                hours24 += 12;
              } else if (period === "AM" && hours24 === 12) {
                hours24 = 0;
              }
        
              const currentDate = new Date();
              currentDate.setHours(hours24);
              currentDate.setMinutes(parseInt(minutes, 10));
              currentDate.setSeconds(0);
              currentDate.setMilliseconds(0);
        
              return currentDate;
            };
        
            // Sort the routes array by departure time in ascending order (earliest to latest)
            const sortedRoutes = data.routes.routes.sort((a, b) => {
              const timeA = parseTimeString(a.departTime);
              const timeB = parseTimeString(b.departTime);
        
              return timeA - timeB; // Sorting in ascending order (earliest to latest)
            });
        
            // Set the sorted routes
            setRoutes(sortedRoutes);
            console.log("R: " + sortedRoutes);
        
            let responseMessage = data["Response"];
        
            if (responseMessage == "All good!") {
              // change front end to the schedule page with all the information added
            } else if (responseMessage == "Wrong Password") {
              // Display wrong password to user
            } else {
              // Display User does not exist
            }
          }

          return (
                <div className='savedRoutes'>
                    {routes.map((route,index) => {
                        <div>
                            <SavedRoute 
                            routeTitle={route.commuteTitle}
                            totalTime={route.totalTime}/>
                        </div>
                    })}
                </div>
          );


}

export default ScrollableRoutes


// const ScrollableRoutes = () => {
//   return (
//     <div className='savedRoutes'>

//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>
//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>
//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>

//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>
//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>
//         <div>
//             <SavedRoute
//                 isFavorite={true}
//                 isBus={true}
//                 isWalking={true}/>
//             <hr id='horizontalLine'></hr>
//         </div>
//     </div>
//   )
// }

// export default ScrollableRoutes