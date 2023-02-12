import { useParams } from "react-router-dom";
import DetailsVideos from "../modules/details/DetailsVideos";
import DetailsOverviews from "../modules/details/DetailsOverviews";

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <DetailsOverviews>
      <DetailsVideos id={id}></DetailsVideos>
    </DetailsOverviews>
  );
};

export default DetailsPage;
