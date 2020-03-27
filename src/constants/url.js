export const baseUrl = process.env.REACT_APP_API_ENDPOINT;

export const nepalData = baseUrl + 'data/nepal';
export const worldData = baseUrl + 'data/world';
export const news = baseUrl + 'news';
export const nepaliDetail = baseUrl + 'data/allnepali';

export const getApiCall = url => {
  return fetch(url, {
    method: 'GET',
    headers: {}
  }).then(response => {});
};
