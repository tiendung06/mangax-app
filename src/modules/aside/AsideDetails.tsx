import Aside from "../../components/aside/Aside";
import { Details } from "../../interface/detailsInterface";

const AsideDetails = ({ details }: { details: Details | undefined }) => {
  return (
    <Aside title="Information">
      <ul className="flex flex-col gap-3 text-xs md:text-sm">
        <li>Type: {details?.type || "Unknown"}</li>
        <li>Episodes: {details?.episodes || "Unknown"}</li>
        <li>Status: {details?.status || "Unknown"}</li>
        <li>Air: {details?.aired.string || "Unknown"}</li>
        <li>
          Premiered: <span className="capitalize">{details?.season}</span>{" "}
          {details?.year || "Unknown"}
        </li>
        <li>Broadcast: {details?.broadcast.string || "Unknown"}</li>
        <li>
          Producers:{" "}
          {details?.producers.map((item, index) => {
            return (
              <span key={item.mal_id}>{(index ? ", " : "") + item.name}</span>
            );
          })}
        </li>
        <li>
          Licensors:{" "}
          {details?.licensors.map((item, index) => {
            return (
              <span key={item.mal_id}>{(index ? ", " : "") + item.name}</span>
            );
          })}
        </li>
        <li>
          Demographic:{" "}
          {details?.demographics.map((item, index) => {
            return (
              <span key={item.mal_id}>{(index ? ", " : "") + item.name}</span>
            );
          })}
        </li>
        <li>Sources: {details?.source || "Unknown"}</li>
        <li>Durations: {details?.duration || "Unknown"}</li>
        <li>Rating: {details?.rating || "Unknown"}</li>
      </ul>
    </Aside>
  );
};

export default AsideDetails;
