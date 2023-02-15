import { useNavigate } from "react-router-dom";
import { ICard } from "../../interface/cardInterface";

const Card = ({ mal_id, images, title }: ICard) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-white cursor-pointer card rounded-2xl"
      onClick={() => navigate(`/anime/${mal_id}`)}
    >
      <div className="w-full h-full overflow-hidden rounded-2xl">
        <img
          src={images.webp.large_image_url}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center invisible px-3 name bg-text1 bg-opacity-60">
        <p className="text-sm font-medium text-center text-white">{title}</p>
      </div>
    </div>
  );
};

export default Card;
