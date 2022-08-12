import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [image, setImage] = useState();
  const onSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID",
      },
    });
    setImage({ image: response.data.results });
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <h1>CarList</h1>
      <SearchBar onSubmit={onSubmit} />
      Found: {image.length} images
    </div>
  );
}

export default App;
