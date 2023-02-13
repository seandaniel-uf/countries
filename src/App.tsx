import React, { useState, useEffect } from "react";
import axios from "axios";
import "./scss/index.scss";

// components
import { Country } from "./components/Country";
import { Filter } from "./components/Filter";

const App = (): JSX.Element => {
  const [countryData, setCountryData] = useState<[]>([]);
  const [selectValue, getSelectValue] = useState<string>("");

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async (): Promise<void> => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(data);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getSelectValue(e.target.value);

    if (e.target.value === "Ascending") {
      const ascendingCountries = countryData.sort(
        (a: any, b: any): number => b.population - a.population
      );
      setCountryData(ascendingCountries);
    } else if (e.target.value === "Descending") {
      const descendingCountries = countryData.sort(
        (a: any, b: any): number => a.population - b.population
      );
      setCountryData(descendingCountries);
    }
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />
      <ul className="country-ul">
        {countryData.map(
          (
            {
              cca3,
              flags,
              name,
              population,
              continents,
              capital,
              currencies,
              languages,
              maps,
            },
            index
          ) => {
            return (
              <Country
                key={index}
                cca3={cca3}
                flags={flags}
                name={name}
                population={population}
                currencies={currencies}
                continents={continents}
                capital={capital}
                languages={languages}
                maps={maps}
              />
            );
          }
        )}
      </ul>
    </>
  );
};

export default App;
