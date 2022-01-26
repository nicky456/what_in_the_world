import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import numeral from "numeral";

export default function CountryDetails({ isDarkMode }) {
  const { cca3 } = useParams();
  const {
    data: country,
    error,
    isLoading,
  } = useFetch("https://restcountries.com/v2/alpha/" + cca3);

  console.log(country);

  return (
    <div className={isDarkMode ? "country-details" : "light country-details"}>
      {error && <div>{error}</div>}
      {isLoading && <Loading />}
      {country && (
        <div className="country-page">
          <img
            className={isDarkMode ? "flag" : "light flag"}
            src={country.flags.svg}
            alt={country.name}
          />
          <div className="more">
            <h1>{country.name}</h1>
            <div className="dets">
              <div className="left">
                <p>
                  <b> Native Name: </b>
                  {country.nativeName}
                </p>
                <p>
                  <b> Population: </b>
                  {numeral(country.population).format("0,0")}
                </p>
                <p>
                  <b> Region: </b>
                  {country.region}
                </p>
                <p>
                  <b> Subegion: </b>
                  {country.subregion}
                </p>
                <p>
                  <b> Capital: </b>
                  {country.capital}
                </p>
              </div>
              <div className="right">
                <p>
                  <b> Top level domain: </b>
                  {country.topLevelDomain}
                </p>
                <p>
                  <b> Currencies: </b>
                </p>
                {country.currencies.map((currency) => (
                  <p key={currency.name}>{currency.name}</p>
                ))}
                <p>
                  <b> Languages: </b>
                </p>
                {country.languages.map((language) => (
                  <p key={language.name}>{language.name}</p>
                ))}
              </div>
            </div>
            {country.borders ? (
              <div>
                <p>
                  <b>Borders: </b>
                </p>
                {country.borders.map((border) => (
                  <Link to={`/${border}`} key={country.border}>
                    <button>{border}</button>
                  </Link>
                ))}
              </div>
            ) : (
              <b>Borders: N/A</b>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
