import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { TriggerMenu } from '../components/atoms/TriggerMenu/TriggerMenu';
import { Header } from '../components/molecules/Header/Header';
import { Menu } from '../components/molecules/Menu/Menu';
import { AboutScreen } from '../components/screens/About/AboutScreen';
import { ComponentsScreen } from '../components/screens/Components/ComponentsScreen';
import { HomeScreen } from '../components/screens/Home/HomeScreen';
import { ProjectsScreen } from '../components/screens/Projects/ProjectsScreen';

export const AppRouter = () => {

  const [ menuOpen,setMenuOpen ] = useState(false);
  const [ translateMenu,setTranslateMenu ] = useState('-100%');

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect( () => {
    if(menuOpen) {
      setTranslateMenu('0')
    } else {
      setTranslateMenu('-100%')
    }
  }, [menuOpen]);

  return (
    <>
      <Router>
        <Header menuOpen={ menuOpen }  onClick={ handleMenu } />
        <TriggerMenu openMenu={ menuOpen } onClick={ handleMenu } />
        <Menu area={ translateMenu } onClick={ handleMenu } />  
        <Routes>
          <Route path='components' element={ <ComponentsScreen /> } />
          <Route path='about' element={ <AboutScreen /> } />
          <Route path='projects' element={ <ProjectsScreen /> } />
          <Route path="*" element={ <HomeScreen /> } />
        </Routes>      
      </Router>
    </>
  )
}
