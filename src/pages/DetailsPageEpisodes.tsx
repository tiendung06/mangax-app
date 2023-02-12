import DetailsOverviews from "../modules/details/DetailsOverviews";
import DetailsEpisodes from "../modules/details/DetailsEpisodes";
import { useParams } from "react-router-dom";

const DetailsPageEpisodes = () => {
  const { id } = useParams();

  return (
    <DetailsOverviews>
      <DetailsEpisodes id={id}></DetailsEpisodes>
    </DetailsOverviews>
  );
};

export default DetailsPageEpisodes;
