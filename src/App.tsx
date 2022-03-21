import React from 'react';
import { Title } from './components/atoms/Tiitle/Title';
import './App.css';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div className='bg-white md:p-6 xl:p-11 overflow-hidden w-screen h-screen relative'>
      <div className='w-full h-full overflow-hidden relative bg-web-gray'>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
