import { Outlet } from "react-router-dom";

import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import Leftbar from "../components/shared/Leftbar";

interface RootProps {
  logOut: () => void;
}

const RootLayout: React.FC<RootProps> = (props) => {
  const handleLogout = () => {
    props.logOut();
  };

  return (
    <div className="w-full md:flex">
      <Topbar logOut={handleLogout} />
      <Leftbar logOut={handleLogout} />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;