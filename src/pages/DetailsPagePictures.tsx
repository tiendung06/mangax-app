import DetailsPictures from "../modules/details/DetailsPictures";
import DetailsOverviews from "../modules/details/DetailsOverviews";
import { useParams } from "react-router-dom";

const DetailsPagePictures = () => {
  const { id } = useParams();

  return (
    <DetailsOverviews>
      <DetailsPictures id={id}></DetailsPictures>
    </DetailsOverviews>
  );
};

export default DetailsPagePictures;
