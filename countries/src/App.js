import { useState } from "react";
import "./App.css";
import Header from "./layout/header/header";
import Countries from "./pages/countries/countries";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Details from "./pages/details/details";
function App() {
  const [countriesclass, setcountriesclass] = useState(".countries");
  return (
    <div className="App">
      <Header
        countriesclass={countriesclass}
        setcountriesclass={setcountriesclass}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Countries
              countriesclass={countriesclass}
              setcountriesclass={setcountriesclass}
            />
          }
        ></Route>
        <Route path="/:name" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
