import ReactPaginate from "react-paginate";
import Card from "../components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jikanAPI } from "../constants/api";
import { Anime } from "../interface/animeInterface";

const AnimePage = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios.get(jikanAPI.getListAnime(page)).then(({ data }) => {
      setAnime(data.data);
      setPage(data.pagination.current_page);
      setLastPage(data.pagination.last_visible_page);
    });
  }, [page]);

  return (
    <div className="spacing">
      <h1 className="mb-5 font-semibold md:text-lg">All Anime</h1>
      <div className="grid grid-cols-3 gap-3 mb-12 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {anime?.map(({ mal_id, images, title }: Anime) => {
          return (
            <Link to={`/anime/${mal_id}`} key={mal_id}>
              <Card images={images} title={title} />
            </Link>
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

export default AnimePage;
