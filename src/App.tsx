import LayoutMain from "./layout/LayoutMain";
import { Route, Routes } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Fragment>
      <Suspense>
        <Routes>
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
