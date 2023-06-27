import { useContext } from "react";
import UploadVideoModal from "../components/UploadModal/UploadVideoModal";
import { UploadModalContext } from "../context/UploadModalContext";
import Dashboard from "../layouts/Dashboard/Dashboard";
import GenrePanel from "../layouts/GenrePanel/GenrePanel";
import Header from "../layouts/Header/Header";

function LandingPage() {
  const {showModal} = useContext(UploadModalContext);

  return (
    <>
      <Header interactive={true} />
      <GenrePanel />
      <div style={{ width: "80%", margin: "2rem auto" }}>
        <Dashboard />
      </div>
      {showModal && <UploadVideoModal />}
    </>
  );
}

export default LandingPage;
