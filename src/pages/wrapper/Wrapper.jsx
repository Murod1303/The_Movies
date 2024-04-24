import { Outlet } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard";
import Header from "../../components/header/Header";
import { Flex } from "antd";

const Wrapper = () => {
  return (
    <main>
      <Flex align="start" className="w-full">
        <Dashboard />
        <Flex vertical className="w-full h-screen overflow-y-scroll">
          <div className="conatiner p-4">
            <Header />
            <Outlet />
          </div>
        </Flex>
      </Flex>
    </main>
  );
};

export default Wrapper;
