import ReactPaginate from "react-paginate";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { EpisodeVideos } from "../../interface/detailsInterface";

const itemsPerPage = 20;

const DetailsEpisodes = () => {
  const [episodeVideos, setEpisodeVideos] = useState<EpisodeVideos[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const { id } = useParams();

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = episodeVideos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(episodeVideos.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % episodeVideos.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios.get(jikanAPI.getAnimeVideosEpisodes(Number(id))).then(({ data }) => {
      setEpisodeVideos(data.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Episodes</h2>
      <div className="grid grid-cols-1 gap-5 mb-12 xl:grid-cols-2">
        {currentItems?.map(({ mal_id, images, title, episode }) => {
          return (
            <div
              className="p-2 min-h-[120px] flex gap-4 bg-white text-sm rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)]"
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
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        className="flex items-center justify-center gap-3 font-medium navigation text-text3"
      />
    </div>
  );
};

export default DetailsEpisodes;
