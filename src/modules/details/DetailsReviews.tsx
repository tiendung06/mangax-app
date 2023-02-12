import ReactPaginate from "react-paginate";
import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "../../interface/reviewsInterface";
import { jikanAPI } from "../../constants/api";
import { formatDate } from "../../helper";
import { addCommas } from "../../helper";

const itemsPerPage = 5;

const DetailsReviews = ({ id }: { id: string | undefined }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = reviews.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % reviews.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios.get(jikanAPI.getAnimeReviews(Number(id))).then(({ data }) => {
      setReviews(data.data);
    });
  }, [id]);

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Reviews</h2>
      <div className="">
        {currentItems?.map(({ mal_id, review, user, date, reactions }) => {
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
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        className="flex items-center justify-center gap-3 font-medium navigation text-text3"
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
      <div
        className={`overflow-hidden mb-3 ${
          collapse ? "max-h-40" : "max-h-max"
        }`}
      >
        <p className="text-xs md:text-sm">{text}</p>
      </div>
      <div className="flex items-center gap-5 text-sm">
        <div className="flex items-center gap-1 text-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <span className="text-text3">{addCommas(reaction)}</span>
        </div>
        <div
          className="flex items-center justify-center gap-1 transition-all cursor-pointer hover:text-secondary"
          onClick={() => setCollapse(!collapse)}
        >
          <span>{collapse ? "Read more" : "Show less"}</span>
          <span className={`${collapse ? "" : "rotate-180"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsReviews;
