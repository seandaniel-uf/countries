import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

// components
import { Country } from "./components/Country";

const App = (): JSX.Element => {
  const [countryData, setCountryData] = useState<[]>([]);

  interface Country {
    fifa: string;
    flags: {
      png: string;
      alt: string;
    };
    name: {
      official: string;
    };
    population: number;
    continents: string[];
    capital: string[];
    // currencies: {
    //   // this changes? (USD, NOK)
    //   object: {
    //     name: string,
    //   }
    // },
    currencies: object;
    languages: object;
  }

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async (): Promise<void> => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setCountryData(data);
  };

  return (
    <div className="wrapper">
      <h1>Countries</h1>
      <ul>
        {countryData.map(
          ({
            //fifa
            cca3,
            flags,
            name,
            population,
            continents,
            capital,
            // currencies,
            // languages,
          }) => {
            return <Country cca3={cca3} />;
          }
        )}
      </ul>
    </div>
  );
};

export default App;
