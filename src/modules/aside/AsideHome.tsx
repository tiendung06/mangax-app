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
      {topAnime?.slice(0, 10).map(({ mal_id, images, title }) => {
        return (
          <Link
            to={`/anime/${mal_id}`}
            className="flex gap-3 mb-3 last:mb-0 hover:text-secondary"
            key={mal_id}
          >
            <img
              src={images.webp.image_url}
              alt={title}
              className="object-cover w-14 rounded-xl"
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
