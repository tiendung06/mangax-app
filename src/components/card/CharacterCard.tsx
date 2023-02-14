import { useNavigate } from "react-router-dom";
import { ICard } from "../../interface/cardInterface";

const CharacterCard = ({ mal_id, images, title }: ICard) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-full bg-white cursor-pointer"
      onClick={() => navigate(`/character/${mal_id}`)}
    >
      <div className="w-full mb-1 overflow-hidden rounded-2xl">
        <img
          src={images.webp.image_url}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center px-3">
        <p className="text-sm font-medium text-center ">{title}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
