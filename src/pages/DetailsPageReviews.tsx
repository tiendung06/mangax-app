import DetailsReviews from "../modules/details/DetailsReviews";
import DetailsOverviews from "../modules/details/DetailsOverviews";
import { useParams } from "react-router-dom";

const DetailsPageReviews = () => {
  const { id } = useParams();

  return (
    <DetailsOverviews>
      <DetailsReviews id={id}></DetailsReviews>
    </DetailsOverviews>
  );
};

export default DetailsPageReviews;
