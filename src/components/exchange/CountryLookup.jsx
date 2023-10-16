import React, { useState, useMemo } from "react";
import api from "../../utils/api";
import { Select, Button } from "antd";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";

function CountryLookup() {
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const options = useMemo(() => countryList().getData(), []);
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(1);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/exchange/lookup?name=${countryName}`, {
        headers: { authorization: `${localStorage.getItem("token")}` },
      });
      setIsLoading(false);
      setCountries([...countries, response.data]);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <div>
        <Select
          showSearch
          placeholder="Select a Country"
          optionFilterProp="children"
          filterOption={filterOption}
          onChange={(e) => {
            setIsLoading(false);
            setCountryName(e);
          }}
          options={options}
          size="large"
          className="col-md-3 me-2"
        />
        <Button
          size="large"
          loading={isLoading}
          type="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {!isLoading && countries.length > 0 && (
        <div className="col-md-3 mt-2">
          <div>Enter Amount</div>
          <input
            type="number"
            className="form-control col-md-3 mt-2"
            min={1}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
      )}
      <div className="mt-2 mb-2 row mx-0">
        {countries.map((country, index) => (
          <div key={index} className="mb-3  col-3">
            <div className="shadow-sm p-3 rounded">
              <div>
                <span className="fw-bold me-2">Country:</span>{" "}
                {country.fullName}
              </div>
              <div>
                <span className="fw-bold me-2">Population:</span>{" "}
                {country.population}
              </div>
              <div>
                <span className="fw-bold me-2">Currency:</span>{" "}
                {country.currencies?.code}
              </div>
              <div>
                <span className="fw-bold me-2">Exchange Rate To EUR:</span>
                {(amount * country.currencies?.exchangeRateToEUR).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryLookup;
