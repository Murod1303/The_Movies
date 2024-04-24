import { Flex } from "antd";
import { BookmarkIcon } from "../../../public/icons/Icons";
const ForLinearGradient = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg)",
};
const TrendingCard = () => (
  <div
    style={ForLinearGradient}
    className="ForLinearGradent w-full h-[200px] p-6 flex items-start justify-end flex-col relative"
  >
    <span className="bg-[#10141e9f] w-8 h-8 flex items-center justify-center rounded-full absolute right-3 top-3">
      <BookmarkIcon />
    </span>
    <Flex align="center" gap={10}>
      <span className="text-[15px] text-[#fffa]">2019</span>
      <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
      <span className="text-[15px] text-[#fffa]">Movie</span>
    </Flex>
    <p className="text-[24px] font-semibold text-[#fff]">Bottom Gear</p>
  </div>
);
export default TrendingCard;
