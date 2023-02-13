import { useState } from "react";

interface CountryProp {
  cca3: string;
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
  currencies: object;
  languages: object;
  maps: {
    googleMaps: string;
  };
}

export const Country = ({
  cca3,
  flags,
  name,
  population,
  continents,
  capital,
  languages,
  maps,
  currencies,
}: CountryProp): JSX.Element => {
  const [modal, toggleModal] = useState<boolean>(false);
  return (
    <>
      <li className="country-card">
        <button onClick={() => toggleModal(!modal)}>
          <figure>
            <img src={flags.png} alt={flags.alt} />
            <figcaption>{cca3}</figcaption>
          </figure>
        </button>
      </li>
      {modal && (
        <section className="modal-underlay">
          <div className="modal">
            <button onClick={() => toggleModal(!modal)}>Close</button>
            <h2>{name.official}</h2>
            <p>{population} Citizens</p>
            <p>Capital: {capital}</p>
            <p>Continent: {continents[0]}</p>
            <p>Languages: {Object.values(languages).join(", ")}</p>
            <p>
              {currencies &&
                `Currency: ${Object.values(currencies)[0].symbol} ${
                  Object.values(currencies)[0].name
                }`}
            </p>
            <a href={maps.googleMaps}>Map</a>
          </div>
        </section>
      )}
    </>
  );
};
