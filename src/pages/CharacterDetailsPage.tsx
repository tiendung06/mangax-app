import Tab from "../components/tab/Tab";
import CharacterVoiceActors from "../modules/character/CharacterVoiceActors";
import CharacterPictures from "../modules/character/CharacterPictures";
import CharacterAppeared from "../modules/character/CharacterAppeared";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TabsType } from "../type/tabsType";
import { jikanAPI } from "../constants/api";
import { CharacterDetails } from "../interface/charactersInterface";

const tabs: TabsType = [
  {
    label: "Appeared on",
    index: 1,
    Component: <CharacterAppeared />,
  },
  {
    label: "Voice actors",
    index: 2,
    Component: <CharacterVoiceActors />,
  },
  {
    label: "Pictures",
    index: 3,
    Component: <CharacterPictures />,
  },
];

const CharacterDetailsPage = () => {
  const [character, setCharacter] = useState<CharacterDetails>();
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getCharacterById(Number(id))).then(({ data }) => {
      setCharacter(data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-10 mb-10 lg:mb-20 md:flex-row spacing">
        <div className="flex items-center justify-center w-full md:max-h-80 lg:max-w-max">
          <div className="w-full h-full overflow-hidden rounded-3xl max-w-max">
            <img
              src={character?.images.webp.image_url}
              alt={character?.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-base font-bold md:text-xl">{character?.name}</h1>
          <p className="text-xs md:text-sm">{character?.about}</p>
        </div>
      </div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default CharacterDetailsPage;
