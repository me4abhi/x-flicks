// import UploadVideoModal from "./components/UploadModal/UploadVideoModal";
import LandingPage from "./pages/LandingPage";
import VideoPage from "./pages/VideoPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FilterVideosProvider } from "./context/FilterVideosContext";
import { SortVideosProvider } from "./context/SortVideosContext";
import { UploadModalProvider } from "./context/UploadModalContext";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <FilterVideosProvider>
          <SortVideosProvider>
            <UploadModalProvider>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/video/:id" component={VideoPage} />
            </UploadModalProvider>
          </SortVideosProvider>
        </FilterVideosProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
