import { Details } from "../../interface/detailsInterface";

const Aside = ({ details }: { details: Details | undefined }) => {
  return (
    <aside className="w-full">
      <h2 className="mb-3 text-sm font-semibold md:text-lg">Information</h2>
      <div className="bg-white rounded-xl shadow-[-4px_4px_8px_rgba(226,226,226,0.2),4px_4px_8px_rgba(226,226,226,0.2)] p-5">
        <ul className="grid grid-cols-1 gap-3 text-xs md:grid-cols-2 md:text-sm">
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
      </div>
    </aside>
  );
};

export default Aside;
