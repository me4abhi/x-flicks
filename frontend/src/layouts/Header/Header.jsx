import "./Header.css";
import { useContext } from "react";
import Logo from "../../components/Logo";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { UploadModalContext } from "../../context/UploadModalContext";

function Header({ interactive }) {
  let interactiveHeaderElements = <></>;

  const {setShowModal} = useContext(UploadModalContext);

  if (interactive) {
    interactiveHeaderElements = (
      <div id="interactive-header">
        <SearchBar />
        <Button
          id="open-upload-modal-button"
          size="string"
          variant="contained"
          startIcon={<UploadIcon />}
          onClick={() => setShowModal(true)}
        >
          Upload
        </Button>
      </div>
    );
  }

  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      {interactiveHeaderElements}
    </header>
  );
}

export default Header;
