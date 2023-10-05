import React from "react";
import List from "../../components/vehicles/List";
import TopNav from "../../components/vehicles/TopNav";

const VehicleListPage = () => {
  return (
    <div className="container  mx-auto">
      <TopNav />
      <List />
    </div>
  );
};

export default VehicleListPage;
