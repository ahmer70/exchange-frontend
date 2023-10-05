import React from "react";
import Vehicles from "../../components/vehicles";
import TopNav from "../../components/vehicles/TopNav";

const VehiclePage = () => {
  return (
    <div className="container mx-auto mt-5">
      <TopNav />
      <Vehicles />
    </div>
  );
};

export default VehiclePage;
