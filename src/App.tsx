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

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
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
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
