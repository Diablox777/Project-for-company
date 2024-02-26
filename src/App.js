import React from "react";
import SettingsPage from "./pages/SettingsPage";
import ErrorPage from "./pages/ErrorPage";
import PricesPage from "./pages/PricesPage"

const App = () => {
  return (
     /*
    <div className="wrapper" >
      <SettingsPage />
    </div> 
    */
     
    <div className="wrapper">
      <ErrorPage />
    </div>
    
    /*
    <div className="wrapper" >
      <PricesPage />
    </div> 
    */
  );
};

export default App;
