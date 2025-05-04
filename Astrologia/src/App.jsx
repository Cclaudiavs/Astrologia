
import React, { useState } from 'react';
import Header from './componentes/Header';
/*import Conjunto from './componentes/Conjunto';*/
import Sidebar from './componentes/Sidebar';
import TarotCards from "./componentes/TarotCards"
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <TarotCards />
    </div>
  );
}

export default App;

