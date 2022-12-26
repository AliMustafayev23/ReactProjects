import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./index.scss";
const SelectRegion = ({ setCountries }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setdata(response.data);
    });
  }, []);

  const selectRegion = (e) => {
    let newcountries = data.filter((element) =>
      element.region.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(newcountries);
  };
  const filterdata = (e) => {
    let newData = data.filter((element) =>
      element.name?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(newData);
    setCountries(newData);
  };
  return (
    <div>
      <div className="search">
        <div id="searchside">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input type="text" onChange={(e) => filterdata(e)} />
        </div>
        <select id="select" onChange={(e) => selectRegion(e)}>
          <option value="filterbyregion">Filter by Region</option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SelectRegion;
