import React from "react";
import { queryClient } from "../..";

const TopNav = () => {
  const logout = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };
  return (
    <div className="shadow-sm rounded p-2 px-4 mt-3 d-flex justify-content-between align-items-center">
      <h4>Vehicle</h4>
      <button type="button" onClick={logout} className="btn btn-dark">
        Logout
      </button>
    </div>
  );
};

export default TopNav;
