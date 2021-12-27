import { useEffect, useState } from "react";
import axios from "axios";
import "./Country.style.css";
import Loader from "./../Loader/Loader.component";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const proxy = "https://intense-mesa-62220.herokuapp.com/";
    const url = "http://api.countrylayer.com/v2/all";
    const getCountries = async (api) => {
      try {
        const { data } = await axios.get(api, {
          params: {
            access_key: "0fbc95d6cc0da110f62c6a4f26eafa7b",
          },
        });
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries(url);
  }, []);

  const renderCountries = () => {
    const filteredCountries = countries.filter((country) => {
      // return country.name.toLowerCase().includes(filter);
      return country.name.toLowerCase().startsWith(filter);
    });
    return (
      <ul>
        {" "}
        {filteredCountries.map((country) => {
          return <li key={country.alpha2Code}>{country.name}</li>;
        })}
      </ul>
    );
  };

  const filterCountries = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  return (
    <div className="countries">
      <input
        className="country-filter"
        type="text"
        onChange={(event) => {
          filterCountries(event);
        }}
        value={filter}
      />
      {loading ? <Loader /> : renderCountries()}
    </div>
  );
};

export default Country;
