import Banner from "../components/banner/Banner";
import { jikanAPI } from "../constants/api";
import List from "../modules/list/List";

const HomePage = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <List title="Season Now" type={jikanAPI.getSeasonNow()} />
      <List title="Top Anime" type={jikanAPI.getTopAnime()} />
      <List title="Top Manga" type={jikanAPI.getTopManga()} />
    </div>
  );
};

export default HomePage;
