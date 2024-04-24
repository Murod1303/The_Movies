import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carusel.style.css";
import TrendingCard from "../trendingCard/TrendingCard";
const dataa = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export default function CaruselTrending() {
  return (
    <div className="w-full">
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper w-full">
        {dataa &&
          dataa.map((item) => (
            <SwiperSlide key={item.id} className="rounded-lg overflow-hidden ">
              <TrendingCard />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
