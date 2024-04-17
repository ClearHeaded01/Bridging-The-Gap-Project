import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../component/DashSidebar";
import PrivateNav from '../component/PrivateNav';


const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <>
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-900 pt-20">
      <div className="md:w-56">
        <DashSidebar />
      </div>

        
    </div>
    </>
  );
};

export default Dashboard;
