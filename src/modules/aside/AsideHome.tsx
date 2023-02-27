import Skeleton from "../../components/skeleton/Skeleton";
import axios from "axios";
import Aside from "../../components/aside/Aside";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jikanAPI } from "../../constants/api";
import { Anime } from "../../interface/animeInterface";

const AsideHome = () => {
  const [topAnime, setTopAnime] = useState<Anime[]>([]);

  useEffect(() => {
    axios.get(jikanAPI.getTopAnime()).then(({ data }) => {
      setTopAnime(data.data);
    });
  }, []);

  return (
    <Aside title="Top anime">
      {topAnime.length <= 0 && <Skeleton />}
      {topAnime.length >= 0 &&
        topAnime?.slice(0, 10).map(({ mal_id, images, title }) => {
          return (
            <Link
              to={`/anime/${mal_id}`}
              className="flex gap-3 mb-3 last:mb-0 hover:text-secondary dark:hover:text-secondary20"
              key={mal_id}
              title={title}
            >
              <img
                src={images.webp.image_url}
                alt={title}
                className="object-cover rounded-lg w-14"
              />
              <p className="text-xs font-medium transition-all lg:text-sm">
                {title || "Unknown"}
              </p>
            </Link>
          );
        })}
    </Aside>
  );
};

export default AsideHome;
