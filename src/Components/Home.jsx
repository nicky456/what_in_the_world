import Countries from "./Countries";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({ isDarkMode }) {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, [url]);

  useEffect(() => {
    setFilteredResults(
      data.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  const selectContinent = (e) => {
    if (e.target.value === "all") {
      setUrl("https://restcountries.com/v3.1/all");
      console.log("all");
    } else if (e.target.value === "africa") {
      setUrl("https://restcountries.com/v3.1/region/africa");
      console.log("Africa");
    } else if (e.target.value === "americas") {
      setUrl("https://restcountries.com/v3.1/region/americas");
      console.log("America");
    } else if (e.target.value === "asia") {
      setUrl("https://restcountries.com/v3.1/region/asia");
      console.log("Asia");
    } else if (e.target.value === "europe") {
      setUrl("https://restcountries.com/v3.1/region/europe");
      console.log("Europe");
    } else if (e.target.value === "oceania") {
      setUrl("https://restcountries.com/v3.1/region/oceania");
      console.log("Oceania");
    }
  };

  return (
    <>
      <div className="filter-search">
        <input
          type={"text"}
          placeholder="Search for countries..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <select onChange={selectContinent}>
          <option value={"all"}>Show all countries</option>
          <option value={"africa"}>Africa</option>
          <option value={"americas"}>America</option>
          <option value={"asia"}>Asia</option>
          <option value={"europe"}>Europe</option>
          <option value={"oceania"}>Oceania</option>
        </select>
      </div>
      <div className="country-list">
        {loading ? (
          <Loading />
        ) : (
          filteredResults.map((country) => (
            <div className="country" key={country.cca3}>
              <Countries country={country} isDarkMode={isDarkMode} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
