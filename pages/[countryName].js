import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import styles from "../styles/details-page.styles.module.css";

export default function Country() {
  const [country, setCountry] = useState(null);
  const [borderCountries, setborderCountries] = useState(null);
  const router = useRouter();
  const { countryName } = router.query;

  useEffect(() => {
    if (countryName) {
      fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data[0]);
        });
    }
  }, [countryName]);
  useEffect(() => {
    if (country) {
      if (country.hasOwnProperty("borders")) {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders[0]},${country.borders[1]},${country.borders[2]}`)
          .then((response) => response.json())
          .then((data) => {
            setborderCountries(data);
          });
      }
    }
  }, [country]);

  return (
    <>
      <Header />
      <main>
        <Link href="./">
          <button className={styles.backButton}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            Back
          </button>
        </Link>
        {country && (
          <div className={styles.container}>
            <img src={country.flags.png} alt={country.flags.alt} />
            <div className={styles.information}>
              <h2>{country.name.common}</h2>
              <div className={styles.details}>
                <div>
                  <p>
                    Native Name: <span>{Object.values(country.name.nativeName)[0].official}</span>
                  </p>
                  <p>
                    Population: <span>{country.population}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital[0]}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Top Level Domain: <span>{country.tld[0]}</span>
                  </p>
                  <p>
                    Currencies: <span>{Object.values(country.currencies)[0].name}</span>
                  </p>
                  <p>
                    Languages: <span>{Object.values(country.languages).join(", ")}</span>
                  </p>
                </div>
              </div>
              {borderCountries && (
                <div className={styles.borderCountries}>
                  <p>Border Countries:</p>
                  <div className={styles.borderCountriesButtons}>
                    {borderCountries.map((borderCountry) => {
                      return (
                        <Link
                          key={borderCountry.name.official}
                          href={{
                            pathname: "/[countryName]",
                            query: { countryName: borderCountry.name.official },
                          }}
                        >
                          <button className={styles.borderCountryButton}>{borderCountry.name.common}</button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
