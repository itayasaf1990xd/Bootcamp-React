import { useEffect, useState } from "react";
import axios from "axios";
import "./Chuck.style.css";

const Chuck = () => {
  const randomJoke_url = "https://api.chucknorris.io/jokes/random";
  const JokesCategories_url = "https://api.chucknorris.io/jokes/categories";
  const jokeCategory_url = "https://api.chucknorris.io/jokes/random";

  const [randomJoke, setRandomJoke] = useState("");
  const [categoryJoke, setCategoryJoke] = useState("");
  const [jokesCategories, setJokesCategories] = useState([]);

  const getRandomJoke = async () => {
    try {
      const response = await axios.get(randomJoke_url);
      setRandomJoke(response.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJokesCategories();
  }, []);

  const getJokesCategories = async () => {
    try {
      const response = await axios.get(JokesCategories_url);
      setJokesCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderJokesCategories = () => {
    return jokesCategories.map((categoryName, index) => {
      return (
        <button
          className={categoryName}
          key={index}
          style={{ margin: "0 1vh" }}
          onClick={() => {
            getCategoryJoke(categoryName);
          }}
        >
          {categoryName}
        </button>
      );
    });
  };

  const getCategoryJoke = async (categoryName) => {
    try {
      const response = await axios.get(jokeCategory_url, {
        params: { query: categoryName },
      });
      setCategoryJoke(response.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="random-joke">
        <button onClick={getRandomJoke}>Random Joke</button>
        <p>{randomJoke}</p>
      </div>
      <div className="jokes-categories">
        <div>{renderJokesCategories()}</div>
        <p class>{categoryJoke}</p>
      </div>
    </div>
  );
};

export default Chuck;
