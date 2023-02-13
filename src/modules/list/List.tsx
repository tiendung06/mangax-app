import Card from "../../components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Anime } from "../../interface/animeInterface";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

const List = ({ title, type }: { title: string; type: any }) => {
  const [list, setList] = useState<Anime[]>([]);
  useEffect((): void => {
    axios.get(type).then(({ data }) => {
      setList(data.data);
    });
  }, [type]);

  return (
    <div className="px-5 mb-10 lg:px-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold md:text-lg">{title}</h2>
        <span className="text-xs transition-all cursor-pointer md:text-sm hover:text-secondary">
          View more
        </span>
      </div>
      <div className="flex items-center justify-center w-full h-auto">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          slidesPerView={"auto"}
          navigation
          spaceBetween={20}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-5"
        >
          {list.map(
            ({ mal_id, images, title, genres, favorites, score }: Anime) => {
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
