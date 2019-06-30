const baseURL = "https://api.iextrading.com/1.0";

//
// reference
//

export const refDataSymbols = () => {
  const url = `${baseURL}/ref-data/symbols`;
  return fetch(url)
  .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

//
// details
//

export const quotesForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/quote`;
  return (
    fetch(url)
      .then(res => Promise.resolve(res.json()))
      .catch(error => Promise.reject(error))
  );
};

export const logoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/logo`;

  return fetch(url)
  .then(res => Promise.resolve(res.json()))
  .catch(error => Promise.reject(error));
};

export const recentNewsForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/news`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const companyInfoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/company`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

//
// market
//

export const topsData = symbol => {
  const url = symbol ? `${baseURL}/tops?symbols=${symbol}` : `${baseURL}/tops`;
  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};
