import LayoutMain from "./layout/LayoutMain";
import { Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const AnimePage = lazy(() => import("./pages/AnimesPage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const CharacterDetailsPage = lazy(() => import("./pages/CharacterDetailsPage"));
const SeasonPage = lazy(() => import("./pages/SeasonPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/anime" element={<AnimePage></AnimePage>}></Route>
            <Route
              path="/anime/:id"
              element={<DetailsPage></DetailsPage>}
            ></Route>
            <Route
              path="/character"
              element={<CharactersPage></CharactersPage>}
            ></Route>
            <Route
              path="/character/:id"
              element={<CharacterDetailsPage></CharacterDetailsPage>}
            ></Route>
            <Route path="/season" element={<SeasonPage></SeasonPage>}></Route>
            <Route
              path="/search/:id"
              element={<SearchPage></SearchPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
