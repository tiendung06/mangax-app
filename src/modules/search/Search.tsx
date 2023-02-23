import useDebounce from "../../hooks/useDebounce";
import IconSearch from "../../components/icons/IconSearch";
import IconClose from "../../components/icons/IconClose";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jikanAPI } from "../../constants/api";
import { Anime } from "../../interface/animeInterface";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Anime[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  const filterDebounce = useDebounce(searchFilter);

  useEffect(() => {
    if (filterDebounce) {
      axios
        .get(jikanAPI.getListAnime(1, filterDebounce))
        .then(({ data }) => setSearchResults(data.data));
      setOpenPopUp(true);
    } else {
      setOpenPopUp(false);
    }
  }, [filterDebounce]);

  const handleCloseForm = () => {
    setOpenPopUp(false);
    setSearchFilter("");
  };

  return (
    <div className="relative flex-1">
      <div className="relative z-30 w-full lg:w-[450px] h-10 lg:h-12">
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Type to search anime..."
          className="w-full h-full bg-white border-none rounded-full text-xs lg:text-sm pl-6 pr-20 outline-none placeholder:text-text4 placeholder:text-xs placeholder:lg:text-sm shadow-[10px_10px_20px_rgba(218,213,213,0.15)]"
        />
        <button className="absolute flex items-center justify-center w-10 text-white lg:w-16 bg-primary rounded-3xl top-2 bottom-2 right-2">
          <IconSearch />
        </button>
      </div>
      <div
        className={`absolute float-left left-0 z-30 w-full mt-5 bg-white top-12 rounded-3xl ${
          !openPopUp ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-between p-3">
          <Link
            to={`/search/${searchFilter}`}
            className="inline-block p-3 text-xs font-medium underline lg:text-sm"
            onClick={handleCloseForm}
          >
            See all results for {searchFilter}
          </Link>
          <button
            className="px-4 py-2 rounded-md lg:px-6 lg:py-3 text-error bg-redSoft lg:rounded-xl"
            onClick={handleCloseForm}
          >
            <IconClose />
          </button>
        </div>
        <div className="px-6 pt-3 pb-6">
          {searchResults.slice(0, 5).map(({ mal_id, title, images, year }) => {
            return (
              <Link
                key={mal_id}
                to={`/anime/${mal_id}`}
                onClick={handleCloseForm}
                className="flex mb-5 h-14 gap-x-5 last:mb-0"
              >
                <img
                  src={images.webp.small_image_url}
                  alt={title}
                  className="object-cover rounded-xl"
                />
                <div className="text-xs lg:text-sm">
                  <p className="mb-1">{title}</p>
                  <p className="text-text3">{year || "Unknown"}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`fixed inset-0 z-20 bg-text1 bg-opacity-60 ${
          !openPopUp ? "hidden" : ""
        }`}
      ></div>
    </div>
  );
};

export default Search;
