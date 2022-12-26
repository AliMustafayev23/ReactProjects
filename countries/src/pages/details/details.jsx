import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./details.scss";
const Details = () => {
  const { name } = useParams();
  let navigate = useNavigate();
  let baseURL = `https://restcountries.com/v3.1/name/${name}`;
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);
  country.map((e) => console.log(e));
  return (
    <div>
      {country.map((e) => {
        return (
          <div className="page">
            <div className="back" onClick={() => navigate(-1)}>
              <i class="fa-solid fa-arrow-left"></i>Back
            </div>
            <div className="country">
              <div className="countryleft">
                <img src={e.flags.png} />
              </div>
              <div className="countryright">
                <h1>{e.name.common}</h1>
                <div className="countryinformation">
                  <div className="countryrightleft">
                    <p>Native Name: {e.name.official}</p>
                    <p>Population: {e.population}</p>
                    <p>Region: {e.region}</p>
                    <p>Sub Region: {e.subregion}</p>
                    <p>Capital: {e.capital}</p>
                  </div>
                  <div className="countryrightright">
                    <p>Top Level Domain: {e.tld}</p>
                    <p>Currencies:{Object.values(e.currencies)[0].name} </p>
                    <p>
                      Languages:
                      {Object.values(e.languages).map((e) => e)}
                    </p>
                  </div>
                </div>
                <h3>Border: {e.border?.map((e, i) => e[i])}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
