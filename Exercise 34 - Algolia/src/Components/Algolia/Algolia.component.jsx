import { useEffect, useState } from "react";
import axios from "axios";
import "./Algolia.style.css";
import Loader from "../Loader/Loader.component";

const Algolia = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("query");
  const [userInput, setUserInput] = useState("hooks");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const search = async (url) => {
      try {
        const { data } = await axios.get(url, {
          params: { query },
        });
        setData(data.hits);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (query.length > 0) {
      setLoading(true);
      search("https://hn.algolia.com/api/v1/search/");
    }
  }, [query]);

  const renderData = () => {
    const dataClone = data.filter((hit) => {
      return hit.title !== null && hit.title !== "";
    });

    return dataClone.map((hit) => {
      return <li key={hit.objectID}>{hit.title}</li>;
    });
  };

  return (
    <div>
      <h1>Alogolia API</h1>
      <input
        className="hits-input"
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      />
      <button
        onClick={() => {
          setQuery(userInput);
        }}
      >
        Search
      </button>
      <ul>{!loading && renderData()}</ul>
      {loading && <span>Loading...</span>}
    </div>
  );
};

export default Algolia;
