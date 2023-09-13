import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddTeam from '../components/AddTeam';
import TeamsList from '../components/TeamsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditTeam from '../components/EditTeam';
import TeamsContext from '../context/TeamsContext';

const AppRouter = () => {
  const [teams, setTeams] = useLocalStorage('teams', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <TeamsContext.Provider value={{ teams, setTeams }}>
            <Routes>
              <Route element={<TeamsList/>} path="/" exact={true} />
              <Route element={<AddTeam/>} path="/add" />
              <Route element={<EditTeam/>} path="/edit/:id" />
              <Route element={() => <Navigate to="/" />} />
            </Routes>
          </TeamsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
