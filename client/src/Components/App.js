// React Imports
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import Profile from "./Profile";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

// Misc Imports

function App() {
  const [database, setDatabase] = useState(undefined);
  const [user, setUser] = useState(null);
  const [profile , setProfile] = useState([]);
  const [userRoute, setUserRoute] = useState("/");

  //Set Users / Database here? - Default state null / undefined respectively
  //User
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          getProfile(user);
          setRoute(user);
        });
      };
      getDatabase();
    });
  }, []);
  function getDatabase() {

    fetch("http://localhost:3000/profiles")
      .then((resp) => resp.json())
      .then((data) => {

        // getProfile(user);

        setDatabase(data);

      });

}
  //Profile
  function getProfile(user) {

    fetch(`/profiles/${user.id}`).then((r) => {
      if (r.ok) {
        r.json().then((profile) => {
          setProfile(profile)
        });
      }
    });
}

function setRoute(thing) {
setUserRoute(`/Profiles/${thing.id}`);

}

  return (
    <div className="App">
      <Header database={database} user={user} setUser={setUser} profile={profile} setProfile={setProfile} userRoute={userRoute}/>
      <Routes>
        <Route path="/" element={<About database={database} user={user} />}/>
        <Route path="/Contact" element={<Contact />}/>
        {/* Make it so that if someone is logged in, they cannot return to login until they logout */}
        <Route path="/Login" element={<Login database={database} user={user} onLogin={setUser} profile={profile} setProfile={setProfile} userRoute={userRoute} setRoute={setRoute} />}/>
        {/* Make Profile a Ternary based on whether someone has signed in*/}
        <Route path={userRoute} element={<Profile database={database} user={user} setUser={setUser} profile={profile} setProfile={setProfile} />}/>
        <Route exact path="/Profiles/:id" element={<Profile database={database} setUser={setUser} profile={profile} setProfile={setProfile}/>} />
      </Routes>

    </div>
  );
}

export default App;
