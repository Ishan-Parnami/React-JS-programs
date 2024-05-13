import React, { useState } from 'react';

const exchange_rates = {
  'USD': {
    'EUR': 0.92,
    'GBP': 0.81,
    'JPY': 133.75
  },
  'EUR': {
    'USD': 1.09,
    'GBP': 0.88,
    'JPY': 145.65
  },
  'GBP': {
    'USD': 1.23,
    'EUR': 1.14,
    'JPY': 165.38
  },
  'JPY': {
    'USD': 0.0075,
    'EUR': 0.0069,
    'GBP': 0.0060
  }
};

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    if (fromCurrency in exchange_rates && toCurrency in exchange_rates[fromCurrency]) {
      const rate = exchange_rates[fromCurrency][toCurrency];
      setConvertedAmount(amount * rate);
    } else {
      const intermediateCurrency = 'USD';
      const rate =
        exchange_rates[fromCurrency][intermediateCurrency] *
        exchange_rates[intermediateCurrency][toCurrency];
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <p>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </p>
    </div>
  );
}

export default CurrencyConverter;