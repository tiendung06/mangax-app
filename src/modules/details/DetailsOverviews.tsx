import axios from "axios";
import Aside from "../aside/Aside";
import { ReactNode, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { jikanAPI } from "../../constants/api";
import { Details } from "../../interface/detailsInterface";
import { addCommas } from "../../helper";
import ListRecommendation from "../list/ListRecommendation";

const DetailsOverviews = ({ children }: { children: ReactNode }) => {
  const [details, setDetails] = useState<Details>();
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getAnimeById(Number(id))).then(({ data }) => {
      setDetails(data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-10 mb-10 lg:mb-20 md:flex-row spacing">
        <div className="flex items-center justify-center w-full md:max-h-80 lg:max-w-max">
          <div className="w-full overflow-hidden rounded-3xl max-w-max">
            <img
              src={details?.images.webp.image_url}
              alt={details?.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-base font-bold md:text-xl">{details?.title}</h1>
          <div className="flex items gap-x-5">
            {details?.genres.map(({ mal_id, name }) => {
              return (
                <span
                  key={mal_id}
                  className="inline-block text-sm font-medium text-text3"
                >
                  {name}
                </span>
              );
            })}
          </div>
          <p className="text-xs md:text-sm text-text3">
            {details?.background
              ? details?.background
              : "No background information has been added to this title."}
          </p>
          <div className="flex items-start gap-x-10">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="px-3 py-1 text-sm font-bold text-white rounded-lg bg-secondary">
                Score
              </span>
              <span className="text-base font-semibold md:text-xl">
                {details?.score}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="px-3 py-1 text-sm font-bold text-white rounded-lg bg-secondary">
                Rank
              </span>
              <span className="text-base font-semibold md:text-xl">
                #{addCommas(Number(details?.rank))}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="px-3 py-1 text-sm font-bold text-white rounded-lg bg-secondary">
                Favorites
              </span>
              <span className="text-base font-semibold md:text-xl">
                {addCommas(Number(details?.favorites))}
              </span>
            </div>
          </div>
          <p className="text-xs md:text-sm">{details?.synopsis}</p>
        </div>
      </div>
      <div className="flex items-center w-full h-10 mb-6 bg-white shadow-sm lg:mb-9 lg:h-20">
        <div className="flex gap-6 text-xs font-medium lg:text-sm spacing lg:gap-16 text-text3">
          <Link path={`/anime/${id}/overviews`} name="Videos" />
          <Link path={`/anime/${id}/episodes`} name="Episodes" />
          <Link path={`/anime/${id}/characters`} name="Characters" />
          <Link path={`/anime/${id}/pictures`} name="Pictures"></Link>
          <Link path={`/anime/${id}/reviews`} name="Reviews"></Link>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-10 mb-6 lg:mb-9 spacing">
        <div className="flex-1">{children}</div>
        <Aside details={details} />
      </div>
      <ListRecommendation id={id} />
    </div>
  );
};

function Link({ path, name }: { path: string; name: string }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "text-secondary font-semibold" : ""
      }
    >
      {name}
    </NavLink>
  );
}

export default DetailsOverviews;
