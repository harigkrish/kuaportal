
import './App.css';

import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";


// import { Sidebar } from 'react-pro-sidebar';
import AuaDemographic from "./components/AuaDemographic";
import PartialDemo from "./components/AuaDemographicPartial";
import Otp from "./components/AuaOtp";
import Biometric from "./components/AuaBiometric";
import Iris from "./components/AuaIris";

import {  ThemeProvider } from "@mui/material";
import { ColorModeContext ,useMode} from "./theme";
import { useState } from "react";

function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/demographic" element={<AuaDemographic />} />
              <Route path="/partialdemo" element={<PartialDemo />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/biometric" element={<Biometric />} />
              <Route path="/iris" element={<Iris />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
