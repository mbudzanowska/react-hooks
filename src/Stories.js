import useFetch from "./hooks/useFetch";

const Stories = () => {
  
  const stories = useFetch("https://catfact.ninja/facts?limit=10", {
    data: [],
  });

  return (
    <div className="Stories">
      <h2>Cat Facts</h2>
      {stories.data.map((story, index) => {
        const { fact } = story;

        return (
          <div key={index}>
            <p>{fact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
