import React, { useEffect } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const PrivateNav = () => {
  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    const  urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  },[location.search])

  const handleLogout = async()=>{
    
  }

  return (
    <Navbar className="border-b-2 bg-gray-900">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white"
      >
        Universal 
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg ">
        Talk AI
        </span>
      </Link>

      <div className="flex">
        
        
        
        
      </div>
    </Navbar>
  );
};

export default PrivateNav;
