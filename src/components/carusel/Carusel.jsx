import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carusel.style.css";
import TrendingCard from "../trendingCard/TrendingCard";
import { useContext } from "react";
import { TrendingContext } from "../../context/Context";

export default function CaruselTrending() {
  const { trend } = useContext(TrendingContext);
  const data = trend?.data?.results;
  return (
    <div className="w-full">
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper w-full">
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="rounded-lg overflow-hidden ">
              <TrendingCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
