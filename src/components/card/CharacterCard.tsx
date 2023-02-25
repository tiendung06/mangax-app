import { useNavigate } from "react-router-dom";
import { ICard } from "../../interface/cardInterface";

const CharacterCard = ({ mal_id, images, title }: ICard) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-between w-full h-full gap-2 cursor-pointer card rounded-2xl"
      title={title}
      onClick={() => navigate(`/character/${mal_id}`)}
    >
      <div className="flex-1 w-full overflow-hidden rounded-2xl">
        <img
          src={images.webp.image_url}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-10 line-clamp-2">
        <p className="text-sm font-medium text-center">{title}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
