/* eslint-disable react/prop-types */
import { Flex } from "antd";
import { BookmarkIcon } from "../../../public/icons/Icons";
const CommonCard = ({ item }) => {
  return (
    <div className="">
      <div
        style={{
          width: 270,
          height: 310,
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item?.poster_path})`,
          backgroundSize: "cover",
        }}
        className="rounded-lg mb-2 relative"
      >
        <span className="bg-[#10141e9f] w-8 h-8 flex items-center justify-center rounded-full absolute right-3 top-3">
          <BookmarkIcon />
        </span>
      </div>
      <div>
        <Flex align="center" gap={10}>
          <span className="text-[15px] text-[#fffa]">
            {item?.release_date
              ? item?.release_date?.slice(0, 4)
              : item?.first_air_date?.slice(0, 4)}
          </span>
          <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
          <span className="text-[15px] text-[#fffa]">
            {item?.title ? "Movie" : "TV Serial"}
          </span>
        </Flex>
        <strong
          className="w-[270px] inline-block overflow-hidden"
          style={{ fontSize: 18, color: "#fff" }}
        >
          {item?.name ? item?.name : item?.title}
        </strong>
      </div>
    </div>
  );
};
export default CommonCard;
