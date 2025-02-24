import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Frontpage from "./Pages/Frontpage";
import WaterAndFood from "./Pages/WaterAndFood";
import Allergies from "./Pages/Allergies";
import Notifications from "./Pages/Notification";
import AddNewAnimal from "./Pages/AddNewAnimal";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/vand-og-mad-skema" element={<WaterAndFood />} />
        <Route path="/allergier" element={<Allergies />} />
        <Route path="/notifikationer" element={<Notifications />} />
        <Route path="/tilfoej-et-dyr" element={<AddNewAnimal />} />
      </Routes>
    </>
  );
};

export default App;
