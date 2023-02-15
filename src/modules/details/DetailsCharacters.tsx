import ReactPaginate from "react-paginate";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { Characters } from "../../interface/charactersInterface";

const itemsPerPage = 20;

const DetailsCharacters = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = characters.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(characters.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % characters.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios.get(jikanAPI.getAnimeCharacters(Number(id))).then(({ data }) => {
      setCharacters(data.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Characters</h2>
      <div className="grid grid-cols-1 gap-5 mb-12 xl:grid-cols-2">
        {currentItems?.map(({ character, voice_actors, role }: Characters) => {
          return (
            <div
              className="flex items-center gap-3 justify-between p-2 bg-white rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)] cursor-pointer"
              key={character.mal_id}
              onClick={() => navigate(`/character/${character.mal_id}`)}
            >
              <div className="flex flex-1 h-full">
                <div className="w-20 h-full">
                  <img
                    src={character.images.webp.image_url}
                    alt={character.name}
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="ml-4 text-sm">
                  <p className="pb-1 font-medium">{character.name}</p>
                  <p className="text-text3">{role}</p>
                </div>
              </div>
              <div className="flex justify-end flex-1 h-full">
                <div className="mr-4 text-sm text-right">
                  <p className="pb-1 font-medium">
                    {voice_actors[0]?.person?.name}
                  </p>
                  <p className="text-text3">{voice_actors[0]?.language}</p>
                </div>
                <div className="w-20">
                  <img
                    src={voice_actors[0]?.person?.images.jpg.image_url}
                    alt={voice_actors[0]?.person?.name}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        className="flex items-center justify-center gap-3 font-medium navigation text-text3"
      />
    </div>
  );
};

export default DetailsCharacters;
