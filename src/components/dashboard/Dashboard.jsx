import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import {
  LogoIcon,
  MovieIcon,
  TVIcon,
  TrendingIcon,
  WatchlistIcon,
} from "../../../public/icons/Icons";

const Dashboard = () => {
  return (
    <section className="dashboar__section inline-block h-screen overflow-scroll w-[128px] shrink-0">
      <div className="container h-full p-4 m-auto">
        <Flex
          justify="space-between"
          align="center"
          className="flex-col bg-[#161D2F] h-full p-8 rounded-2xl"
        >
          <Flex
            justify="start"
            align="center"
            className="flex-col bg-[#161D2F]"
          >
            <NavLink to="/" className="mb-20">
              <LogoIcon />
            </NavLink>
            <nav className="nav">
              <Flex
                align="center"
                justify="center"
                className="nav__list flex flex-col gap-10"
              >
                <li className="nav__item">
                  <NavLink to={"/"}>
                    {({ isActive }) => {
                      return (
                        <TrendingIcon
                          fill={isActive ? "#fff" : ""}
                          className="w-8 h-8 inline-block hover:first:fill-[#FC4747]"
                        />
                      );
                    }}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/movie"}>
                    {({ isActive }) => {
                      return (
                        <MovieIcon
                          fill={isActive ? "#fff" : ""}
                          className="w-8 h-8 inline-block"
                        />
                      );
                    }}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/tv"}>
                    {({ isActive }) => {
                      return (
                        <TVIcon
                          fill={isActive ? "#fff" : ""}
                          className="w-8 h-8 inline-block"
                        />
                      );
                    }}
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/watchlist"}>
                    {({ isActive }) => {
                      return (
                        <WatchlistIcon
                          fill={isActive ? "#fff" : ""}
                          className="w-8 h-8 inline-block"
                        />
                      );
                    }}
                  </NavLink>
                </li>
              </Flex>
            </nav>
          </Flex>
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#fff", color: "#000" }}
          />
        </Flex>
      </div>
    </section>
  );
};

export default Dashboard;
