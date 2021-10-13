import { useState } from "react";
import Gallery from "./Gallery";
import Joke from "./Joke";
import Matrix from "./Matrix";
import Stories from "./Stories";
import Tasks from "./Tasks";
import BetterTasks from "./BetterTasks";

const App = () => {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
    //console.log("userQuery", userQuery);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <h1>Hello Mery</h1>
      <div className="form">
        <input
          type="text"
          vlaue={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <button onClick={toggleShowGallery}>
        {showGallery ? "Hide" : "Show"} Gallery
      </button>
      {showGallery && <Gallery />}
      <hr />
      <Matrix />
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <BetterTasks />
      <hr />
      <Stories />
    </div>
  );
};

export default App;
