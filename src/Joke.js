import useFetch from "./hooks/useFetch";

const Joke = () => {
  
  const joke = useFetch("https://api.jokes.one/jod", {
    contents: {
      jokes: [
        {
          joke: {
            title: "",
            text: "",
          },
        },
      ],
    },
  });

  const { title, text } = joke.contents.jokes[0].joke;

  return (
    <div>
      <h2>Joke</h2>
      <h3>{title}</h3>
      <p>
        <em>{text}</em>
      </p>
    </div>
  );
};

export default Joke;
