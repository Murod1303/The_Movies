import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import { BookmarkIcon } from "../../../public/icons/Icons";
const CommonCard = () => (
  <div className="">
    <div
      style={{
        width: 270,
        height: 154,
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w500/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg)",
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
        <span className="text-[15px] text-[#fffa]">2019</span>
        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
        <span className="text-[15px] text-[#fffa]">Movie</span>
      </Flex>
      <Text strong={true} style={{ fontSize: 18, color: "#fff" }}>
        The Great Lands
      </Text>
    </div>
  </div>
);
export default CommonCard;
