import List from "../modules/list/List";
import { jikanAPI } from "../constants/api";

const HomePage = () => {
  return (
    <div>
      <List
        title="Season Now"
        type={jikanAPI.getSeasonNow()}
        link={"/season"}
      />
      <List title="Top Anime" type={jikanAPI.getTopAnime()} />
    </div>
  );
};

export default HomePage;
