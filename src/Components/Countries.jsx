import { Link } from "react-router-dom";

export default function Countries({ country, isDarkMode }) {
  return (
    // <Link to={`/${country.cca3}`} key={country.cca3}>
    <>
      <img
        className={isDarkMode ? "flag" : "light flag"}
        src={country.flags.svg}
        alt={country.name.common}
      />
      <div className={isDarkMode ? "details" : "light details"}>
        <h2>{country.name.common}</h2>
        <p>
          <b>Population: </b>
          {country.population}
        </p>
        <p>
          <b>Region: </b>
          {country.region}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital}
        </p>
      </div>
    </>
    // </Link>
  );
}
