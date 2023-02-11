interface CountryProp {
  cca3: string;
  // flags: {
  //   png: string;
  //   alt: string;
  // };
  // name: {
  //   official: string;
  // };
  // population: number;
  // continents: string[];
  // capital: string[];
  // currencies: {
  //   // this changes? (USD, NOK)
  //   object: {
  //     name: string,
  //   }
  // },
  // currencies: object;
  // languages: object;
}

export const Country = ({
  cca3,
}: // flags,
// name,
// population,
// continents,
// capital,
CountryProp): JSX.Element => {
  return <li>{cca3}</li>;
};
