import Card from "../../components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Root } from "../../interface/animeInterface";
import { Navigation } from "swiper";
import { IList } from "../../interface/listInterface";
import "swiper/css/navigation";
import "swiper/css";

const List = ({ title, type }: IList) => {
  const [list, setList] = useState<Root[]>([]);
  useEffect((): void => {
    axios.get(type).then(({ data }) => {
      setList(data.data);
    });
  }, [type]);

  return (
    <div className="px-5 mb-10 lg:px-10 movie-list">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-sm cursor-pointer">View more</span>
      </div>
      <div className="flex items-center justify-center w-full h-auto">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          slidesPerView={"auto"}
          navigation
          spaceBetween={20}
        >
          {list.map(
            ({ mal_id, images, title, genres, favorites, score }: Root) => {
              return (
                <SwiperSlide key={mal_id}>
                  <Card
                    mal_id={mal_id}
                    images={images}
                    title={title}
                    genres={genres}
                    favorites={favorites}
                    score={score}
                  ></Card>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default List;
