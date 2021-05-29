import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";

import Layout from "./components/layout/Layout";
import SnsButtons from "./components/pageComponents/SnsButton";
import FlashCardPage from "./pages/FlashCardPage";

import ViewFlashCardPage from "./pages/ViewFlashCardPage";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/japan2u" exact>
            <MainPage />
          </Route>
          <Route path="/flash-card">
            <FlashCardPage />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/view-flashcard">
            <ViewFlashCardPage />
          </Route>
        </Switch>
      </Layout>
      <div>
        <hr style={{ width: "70%" }} />
        <SnsButtons />
      </div>
    </div>
  );
}

export default App;
