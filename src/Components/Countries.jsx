import { Link } from "react-router-dom";

export default function Countries({ country, isDarkMode }) {
  return (
    <Link to={`/${country.cca3}`} key={country.cca3}>
      <div
        style={{
          backgroundImage: `url(${country.flags.svg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flag-ribbon"
      >
        {" "}
        <div
          className="flag-ribbon-before"
          style={{
            content: "",
            display: "block",
            backgroundImage: `url(${country.flags.svg})`,
            backgroundPosition: "bottom",
            width: "16px",
            height: "16px",
            position: "absolute",
            top: "20vh",
            left: 0,
            borderRadius: "0 0 0 16px",
          }}
        ></div>
      </div>

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
    </Link>
  );
}
