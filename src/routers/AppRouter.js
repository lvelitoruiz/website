import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ComponentsScreen } from '../components/screens/Components/ComponentsScreen';
import { HomeScreen } from '../components/screens/Home/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='components' element={ <ComponentsScreen /> } />
        <Route path="*" element={ <HomeScreen /> } />
      </Routes>      
    </Router>
  )
}
