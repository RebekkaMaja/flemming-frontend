import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './Pages/Frontpage';
import WaterAndFood from './Pages/WaterAndFood';
import Alligies from './Pages/Allergies';
import Notification from './Pages/Notification';
import AddNewAnimal from './Pages/AddNewAnimal';
import Header from './Components/Header';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Header /> {/* Header placeres her, så den vises på alle sider */}
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/vand-og-mad-skema" element={<WaterAndFood />} />
        <Route path="/allergier" element={<Alligies />} />
        <Route path="/notifikationer" element={<Notification />} />
        <Route path="/tilfoej-et-dyr" element={<AddNewAnimal />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
