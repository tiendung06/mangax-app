import ReactPaginate from "react-paginate";
import Card from "../components/card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { jikanAPI } from "../constants/api";
import { Anime } from "../interface/animeInterface";

const SeasonPage = () => {
  const [season, setSeason] = useState<Anime[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios.get(jikanAPI.getSeasonNow(page)).then(({ data }) => {
      setSeason(data.data);
      setPage(data.pagination.current_page);
      setLastPage(data.pagination.last_visible_page);
    });
  }, [page]);

  return (
    <div className="spacing">
      <h1 className="mb-5 font-semibold md:text-lg">Season now</h1>
      <div className="grid grid-cols-3 gap-3 mb-12 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {season?.map(({ mal_id, images, title }: Anime) => {
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
        className="flex items-center justify-center gap-3 font-medium navigation text-text3"
      />
    </div>
  );
};

export default SeasonPage;
