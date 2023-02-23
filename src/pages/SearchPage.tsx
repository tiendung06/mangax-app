import ReactPaginate from "react-paginate";
import Card from "../components/card/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../constants/api";
import { Anime } from "../interface/animeInterface";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Anime[]>();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const { id } = useParams();

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios.get(jikanAPI.getListAnime(page, id)).then(({ data }) => {
      setSearchResults(data.data);
      setPage(data.pagination.current_page);
      setLastPage(data.pagination.last_visible_page);
    });
  }, [id, page]);

  return (
    <div className="spacing">
      <h1 className="mb-5 font-semibold md:text-lg">
        All results for &ldquo;{id}&rdquo;
      </h1>
      <div className="grid grid-cols-3 gap-3 mb-12 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {searchResults?.map(({ mal_id, images, title }: Anime) => {
          return (
            <Card
              key={mal_id}
              mal_id={mal_id}
              images={images}
              title={title}
            ></Card>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={lastPage}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export default SearchPage;
