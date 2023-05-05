import Link from "next/link";

export default function CountryElement({ country }) {
  return (
    <Link
      key={country.name.common}
      href={{
        pathname: "/[countryName]",
        query: { countryName: country.name.common },
      }}
    >
      <div className="country-element">
        <img src={country.flags.svg} alt={country.flags.alt} />
        <div className="country-element-information">
          <h2>{country.name.common}</h2>
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          {country.capital && (
            <p>
              Capital: <span>{country.capital[0]}</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
