import ReactPaginate from "react-paginate";
import Card from "../components/card/Card";
import axios from "axios";
import AsideHome from "../modules/aside/AsideHome";
import { useEffect, useState } from "react";
import { jikanAPI } from "../constants/api";
import { Anime } from "../interface/animeInterface";

const HomePage = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios.get(jikanAPI.getTopAnime(page, "upcoming")).then(({ data }) => {
      setAnime(data.data);
      setPage(data.pagination.current_page);
      setLastPage(data.pagination.last_visible_page);
    });
  }, [page]);

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-20 xl:flex-nowrap spacing">
      <div className="w-full xl:w-3/4">
        <h1 className="mb-5 font-semibold md:text-lg">Upcoming</h1>
        <div className="grid grid-cols-3 gap-3 mb-12 md:grid-cols-6">
          {anime?.map(({ mal_id, images, title }: Anime) => {
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
      <AsideHome />
    </div>
  );
};

export default HomePage;
