import { ICard } from "../../interface/cardInterface";

const Card = ({ mal_id, images, title, genres }: ICard) => {
  return (
    <div className="relative w-full h-full cursor-pointer rounded-2xl bg-white shadow-[0px_2px_4px_rgba(184,184,184,0.03),0px_6px_12px_rgba(184,184,184,0.02),0px_12px_20px_rgba(184,184,184,0.03)]">
      <div className="w-full h-40 mb-4 overflow-hidden rounded-2xl">
        <img
          src={images.webp.large_image_url}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-5">
        <div className="flex items-center mb-4 text-xs font-medium md:text-sm gap-x-3 text-text3">
          {genres.slice(0, 3).map(({ mal_id, name }) => {
            return <span key={mal_id}>{name}</span>;
          })}
        </div>
        <p className="pb-4 text-sm font-semibold md:text-base">{title}</p>
      </div>
    </div>
  );
};

export default Card;
