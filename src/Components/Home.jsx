import Countries from "./Countries";
import Loading from "./Loading";
import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";

export default function Home({ isDarkMode }) {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, isLoading, error } = useFetch(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // const searchItems = (event) => {
  //   console.log(event.target.value);
  //   setSearchTerm(event.target.value);
  //   console.log(searchTerm);
  //   const filteredData = data.filter((item) => {
  //     return item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setFilteredResults(filteredData);
  // };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const searchItems = () => {
    const filteredData = data.filter((item) => {
      return item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredResults(filteredData);
  };

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
          value={searchTerm}
          type={"text"}
          placeholder="Search for countries..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchItems();
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
        {error && <div>{error}</div>}
        {isLoading && <Loading />}
        {searchTerm.length > 0
          ? filteredResults.map((country) => {
              return (
                <div className="country" key={country.cca3}>
                  <Countries country={country} isDarkMode={isDarkMode} />
                </div>
              );
            })
          : data &&
            data.map((country) => {
              return (
                <div className="country" key={country.cca3}>
                  <Countries country={country} isDarkMode={isDarkMode} />
                </div>
              );
            })}
      </div>
    </>
  );
}
