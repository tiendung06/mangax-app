import Card from "../../components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { jikanAPI } from "../../constants/api";
import "swiper/css/navigation";
import "swiper/css";

const ListRecommendation = ({ id }: { id: string | undefined }) => {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    axios.get(jikanAPI.getAnimeRecommendations(Number(id))).then(({ data }) => {
      setRecommendation(data.data);
    });
  }, [id]);

  return (
    <div className="px-5 lg:px-10">
      <h2 className="mb-5 text-sm font-semibold md:text-lg">Recommendations</h2>
      <div className="flex items-center justify-center w-full h-auto">
        <Swiper
          modules={[Navigation]}
          grabCursor={true}
          slidesPerView={"auto"}
          navigation
          spaceBetween={20}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-5"
        >
          {recommendation.map(({ entry }: any) => {
            return (
              <SwiperSlide key={entry.mal_id}>
                <Card
                  mal_id={entry.mal_id}
                  images={entry.images}
                  title={entry.title}
                ></Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListRecommendation;
