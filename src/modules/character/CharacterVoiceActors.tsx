import axios from "axios";
import { VoiceActor } from "../../interface/charactersInterface";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";

const CharacterVoiceActors = () => {
  const [voiceActors, setVoiceActors] = useState<VoiceActor[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getCharacterVoiceActors(Number(id))).then(({ data }) => {
      setVoiceActors(data.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Voice actors</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {voiceActors.map(({ language, person }) => {
          return (
            <div
              className="flex items-center gap-3 justify-between p-2 bg-white rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)]"
              key={person.mal_id}
            >
              <div className="flex flex-1 h-full">
                <div className="w-20 h-full">
                  <img
                    src={person.images.jpg.image_url}
                    alt={person.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="ml-4 text-sm">
                  <p className="pb-1 font-medium">{person.name}</p>
                  <p className="text-text3">{language}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterVoiceActors;
