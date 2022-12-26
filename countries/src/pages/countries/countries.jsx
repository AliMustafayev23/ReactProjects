import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./countries.scss";
import SelectRegion from "../../companents";
import { Link } from "react-router-dom";
const Countries = () => {
  let baseURL = "https://restcountries.com/v2/all";
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  }, []);
  let countriesside = useRef();
  let select = useRef();

  return (
    <div className="page">
      <SelectRegion countries={countries} setCountries={setCountries} />

      <div className="countries" ref={countriesside}>
        {countries.map((element) => {
          return (
            <Link to={element.name} className="card">
              <img src={element.flag} className="images" />
              <h2>{element.name}</h2>
              <p>Population:{element.population}</p>
              <p>Region:{element.region}</p>
              <p>Capital:{element.capital}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
