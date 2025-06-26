import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateHabit from "./CreateHabit";
import Calendar from "./Calendar";
import Summary from "./Summary";
import ProtectedNavbar from "../components/ProtectedNavbar";
import ProfileCard from "./ProfileCard";

const SelfTrack = () => {
  const { me } = useParams(); // Get dynamic segment from URL

  const navigation = [
    { path: "", element: <Dashboard /> },
    { path: "create-habit", element: <CreateHabit /> },
    { path: "calendar", element: <Calendar /> },
    { path: "summary", element: <Summary /> },
    { path: "profile", element: <ProfileCard /> },
  ];

  return (
    <div style={{  width:'100%' }}>
      <ProtectedNavbar me={me}/>
      <Routes>
        {navigation.map((el, ind) => (
          <Route path={el.path} element={el.element} key={ind} />
        ))}
      </Routes>
    </div>
  );
};

export default SelfTrack;