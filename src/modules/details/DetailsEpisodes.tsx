import ReactPaginate from "react-paginate";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { EpisodeVideos } from "../../interface/detailsInterface";

const DetailsEpisodes = () => {
  const [episodeVideos, setEpisodeVideos] = useState<EpisodeVideos[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const { id } = useParams();

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios
      .get(jikanAPI.getAnimeVideosEpisodes(Number(id), page))
      .then(({ data }) => {
        setEpisodeVideos(data.data);
        setLastPage(data.pagination.last_visible_page);
      });
  }, [id, page]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Episodes</h2>
      <div className="grid grid-cols-1 gap-5 mb-12 xl:grid-cols-2">
        {episodeVideos?.map(({ mal_id, images, title, episode }) => {
          return (
            <div
              className="p-2 min-h-[120px] flex gap-4 bg-white text-sm rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)] dark:bg-darkSecondary dark:shadow-none"
              key={mal_id}
            >
              <div className="h-full">
                <img
                  src={images?.jpg?.image_url}
                  alt={title}
                  className="object-cover w-40 h-full rounded-xl bg-text4"
                />
              </div>
              <div className="flex-1">
                <p className="pb-1 font-medium lg:text-base">
                  {episode}: {title}
                </p>
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
        pageCount={lastPage}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export default DetailsEpisodes;
