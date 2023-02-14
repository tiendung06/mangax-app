import LayoutMain from "./layout/LayoutMain";
import { Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const DetailsPagePictures = lazy(() => import("./pages/DetailsPagePictures"));
const DetailsPageReviews = lazy(() => import("./pages/DetailsPageReviews"));
const DetailsPageCharacters = lazy(
  () => import("./pages/DetailsPageCharacters")
);
const DetailsPageEpisodes = lazy(() => import("./pages/DetailsPageEpisodes"));
const AnimePage = lazy(() => import("./pages/AnimesPage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const CharacterDetailsPage = lazy(() => import("./pages/CharacterDetailsPage"));

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/anime" element={<AnimePage></AnimePage>}></Route>
            <Route
              path="/anime/:id/overviews"
              element={<DetailsPage></DetailsPage>}
            ></Route>
            <Route
              path="/anime/:id/pictures"
              element={<DetailsPagePictures></DetailsPagePictures>}
            ></Route>
            <Route
              path="/anime/:id/reviews"
              element={<DetailsPageReviews></DetailsPageReviews>}
            ></Route>
            <Route
              path="/anime/:id/characters"
              element={<DetailsPageCharacters></DetailsPageCharacters>}
            ></Route>
            <Route
              path="/anime/:id/episodes"
              element={<DetailsPageEpisodes></DetailsPageEpisodes>}
            ></Route>
            <Route
              path="/character"
              element={<CharactersPage></CharactersPage>}
            ></Route>
            <Route
              path="/character/:id"
              element={<CharacterDetailsPage></CharacterDetailsPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
