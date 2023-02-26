import { ICard } from "../../interface/cardInterface";

const Card = ({ images, title }: ICard) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full h-full gap-2 transition-all cursor-pointer card rounded-2xl hover:text-secondary dark:hover:text-secondary20"
      title={title}
    >
      <div className="flex-1 w-full overflow-hidden rounded-2xl">
        <img
          src={images.webp.large_image_url || images.webp.image_url}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full h-10 line-clamp-2">
        <p className="text-sm font-medium text-center">{title}</p>
      </div>
    </div>
  );
};

export default Card;
