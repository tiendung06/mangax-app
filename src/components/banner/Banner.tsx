import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Root } from "../../interface/animeInterface";
import { jikanAPI } from "../../constants/api";
import { Button } from "../button";
import { Autoplay } from "swiper";
import "swiper/scss/autoplay";
import "swiper/scss";

const Banner = () => {
  const [listBanner, setListBanner] = useState<Root[]>([]);

  useEffect(() => {
    axios.get(jikanAPI.getTopAnime()).then(({ data }) => {
      setListBanner(data.data);
    });
  }, []);

  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 5000 }}
        spaceBetween={40}
      >
        {listBanner
          .slice(0, 10)
          .map(({ mal_id, images, title, background, season, year }: Root) => {
            return (
              <SwiperSlide key={mal_id}>
                <div className="relative w-full h-full">
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
                  <div className="w-full h-[600px]">
                    <img
                      src={images.webp.large_image_url}
                      alt={title}
                      title={title}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="absolute px-5 w-full left-0 lg:left-20 top-20 max-w-[600px]">
                    <span className="inline-block pb-4 capitalize">
                      Season: {season} {year}
                    </span>
                    <h2 className="pb-4 text-5xl font-bold">{title}</h2>
                    {background && (
                      <p className="pb-5 leading-relaxed">{background}</p>
                    )}
                    <Button>Watch now</Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Banner;
