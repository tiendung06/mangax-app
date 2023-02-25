import ReactPaginate from "react-paginate";
import IconHeart from "../../components/icons/IconHeart";
import IconArrow from "../../components/icons/IconArrow";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Review } from "../../interface/reviewsInterface";
import { jikanAPI } from "../../constants/api";
import { formatDate } from "../../helper";
import { addCommas } from "../../helper";

const DetailsReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const { id } = useParams();

  const handlePageClick = (event: any) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    axios.get(jikanAPI.getAnimeReviews(Number(id), page)).then(({ data }) => {
      setReviews(data.data);
      setPage(data.pagination.current_page);
      setLastPage(data.pagination.last_visible_page);
    });
  }, [id, page]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Reviews</h2>
      <div className="">
        {reviews?.map(({ mal_id, review, user, date, reactions }) => {
          return (
            <div className="mb-5" key={mal_id}>
              <div className="flex mb-3 gap-x-4">
                <img
                  src={user?.images.webp.image_url}
                  alt={user?.username}
                  className="object-cover w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{user.username}</p>
                  <p className="text-xs md:text-sm text-text3">
                    {formatDate(date)}
                  </p>
                </div>
              </div>
              <TextCollapse text={review} reaction={reactions.overall} />
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

const TextCollapse = ({
  text,
  reaction,
}: {
  text: string;
  reaction: number;
}) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <div>
      <div className={`mb-3 ${collapse && "line-clamp-5"}`}>
        <p className="text-xs md:text-sm">{text}</p>
      </div>
      <div className="flex items-center gap-5 text-sm">
        <div className="flex items-center gap-1 text-error">
          <IconHeart />
          <span className="text-text3">{addCommas(reaction)}</span>
        </div>
        <div
          className="flex items-center justify-center gap-1 transition-all cursor-pointer hover:text-secondary dark:text-text4 dark:hover:text-secondary"
          onClick={() => setCollapse(!collapse)}
        >
          <span className="text-xs md:text-sm">
            {collapse ? "Read more" : "Show less"}
          </span>
          <span className={`${collapse ? "" : "rotate-180"}`}>
            <IconArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsReviews;
