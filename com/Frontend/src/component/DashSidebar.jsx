import { Sidebar } from "flowbite-react";
import {

  HiArrowSmRight,

  HiUser,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdText } from "react-icons/io";
import { RiChatVoiceFill } from "react-icons/ri";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { RiSpeakLine } from "react-icons/ri";
const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleLogout = async () => {};
  return (
    <Sidebar className="w-full md:w-56 border-r-4 border-b-4 border-purple-950">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1 text-white">
          <Link to="/dashboard?tab=asltotext">
            <Sidebar.Item
              active={tab === "asltotext"}
              icon={FaAmericanSignLanguageInterpreting}
              labelColor="dark"
              as="div"
            >
              ASL to Text
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=texttoasl">
            <Sidebar.Item
              active={tab === "texttoasl"}
              icon={RiChatVoiceFill}
              labelColor="dark"
              as="div"
            >
              Text to ASL
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=texttospeech">
            <Sidebar.Item
              active={tab === "texttospeech"}
              icon={RiSpeakLine}
              labelColor="dark"
              as="div"
            >
              Text to Speech
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=multilingual">
            <Sidebar.Item
              active={tab === "multilingual"}
              icon={IoMdText}
              labelColor="dark"
              as="div"
            >
              Multilingual Text
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard">
            <Sidebar.Item
              active={tab === ""}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              
              as="div"
            >
              {currentUser.username}
              <br/>
              {currentUser.email}
            </Sidebar.Item>
          </Link>

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleLogout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
