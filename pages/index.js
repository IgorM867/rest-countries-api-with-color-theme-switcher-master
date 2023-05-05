import SearchBar from "@/components/SearchBar";
import RegionSelecting from "@/components/RegionSelecting";
import CountryElement from "@/components/CountryElement";
import Header from "@/components/Header";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const filterCountries = () => {
    if (selectedRegion) {
      return [...data].filter((country) => country.name.official.toLowerCase().includes(inputValue.toLowerCase()) && country.region === selectedRegion);
    } else {
      return [...data].filter((country) => country.name.official.toLowerCase().includes(inputValue.toLowerCase()));
    }
  };
  const filteredCountries = filterCountries();
  const onChangeHandle = ({ target: { value } }) => {
    setInputValue(value);
  };
  const onSelectHandle = (region) => {
    setSelectedRegion(region);
  };

  return (
    <>
      <Header />
      <main>
        <form>
          <SearchBar onChange={onChangeHandle} />
          <RegionSelecting selectedRegion={selectedRegion} onSelect={onSelectHandle} />
        </form>
        <div className="countriesList">
          {filteredCountries.map((country) => (
            <CountryElement country={country} />
          ))}
        </div>
      </main>
    </>
  );
}
