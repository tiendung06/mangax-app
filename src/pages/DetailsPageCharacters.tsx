import DetailsOverviews from "../modules/details/DetailsOverviews";
import DetailsCharacters from "../modules/details/DetailsCharacters";
import { useParams } from "react-router-dom";

const DetailsPageCharacters = () => {
  const { id } = useParams();

  return (
    <DetailsOverviews>
      <DetailsCharacters id={id}></DetailsCharacters>
    </DetailsOverviews>
  );
};

export default DetailsPageCharacters;
