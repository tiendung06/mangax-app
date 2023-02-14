import Card from "../../components/card/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { Appeared } from "../../interface/charactersInterface";

const CharacterAppeared = () => {
  const [appeared, setAppeared] = useState<Appeared[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getCharacterAnime(Number(id))).then(({ data }) => {
      setAppeared(data.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Appeared on</h2>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {appeared?.map(({ anime }: Appeared) => {
          return (
            <Card
              key={anime.mal_id}
              images={anime.images}
              title={anime.title}
              mal_id={anime.mal_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterAppeared;
