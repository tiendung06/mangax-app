import Tab from "../components/tab/Tab";
import ListRecommendation from "../modules/list/ListRecommendation";
import DetailsVideos from "../modules/details/DetailsVideos";
import DetailsReviews from "../modules/details/DetailsReviews";
import DetailsPictures from "../modules/details/DetailsPictures";
import DetailsEpisodes from "../modules/details/DetailsEpisodes";
import DetailsCharacters from "../modules/details/DetailsCharacters";
import axios from "axios";
import AsideDetails from "../modules/aside/AsideDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TabsType } from "../type/tabsType";
import { jikanAPI } from "../constants/api";
import { Details } from "../interface/detailsInterface";
import { addCommas } from "../helper";

const tabs: TabsType = [
  {
    label: "Videos",
    index: 1,
    Component: <DetailsVideos />,
  },
  {
    label: "Episodes",
    index: 2,
    Component: <DetailsEpisodes />,
  },
  {
    label: "Characters",
    index: 3,
    Component: <DetailsCharacters />,
  },
  {
    label: "Pictures",
    index: 4,
    Component: <DetailsPictures />,
  },
  {
    label: "Reviews",
    index: 5,
    Component: <DetailsReviews />,
  },
];

const DetailsPage = () => {
  const [details, setDetails] = useState<Details>();
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getAnimeById(Number(id))).then(({ data }) => {
      setDetails(data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-10 mb-10 md:flex-row spacing">
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
          <h1 className="text-base font-bold md:text-xl">
            {details?.title || "Unknown"}
          </h1>
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
                {details?.score || 0}
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
      <div className="flex flex-wrap justify-between gap-5 mb-6 lg:mb-9 spacing">
        <AsideDetails details={details} />
        <div className="flex-1">
          {details?.trailer.embed_url && (
            <div className="w-full h-full">
              <iframe
                width="560"
                height="315"
                src={details?.trailer.embed_url || details?.trailer.url}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-fill w-full h-full rounded-xl"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className="mb-6 lg:mb-9">
        <Tab tabs={tabs} />
      </div>
      <ListRecommendation id={id} />
    </div>
  );
};

export default DetailsPage;
