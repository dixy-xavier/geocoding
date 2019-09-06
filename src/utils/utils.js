/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
import { GET_GOOGLE_LOCATION } from '../constants/urls';

export const request = async (url, method = { method: 'GET' }) => {
  try {
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      ...method
    };
    const response = await fetch(url, config);
    return await response.json();
  } catch (e) {
    return await new Promise(() => 'Error');
  }
};

/**
 *  This function takes url path and json object as parameters and
 *  returns the path with the replaced path params.
 */
export const replaceParams = (path, params = {}) => Object.keys(params)
  .reduce((prev, next) => prev.replace(new RegExp(`:${next}`, 'g'), params[next]), path);

/**
 *  This function takes latitude, longitude and api key as parameters,
 *  calls google API service and returns the json with location details.
 */
export const callGAPI = ({ latitude, longitude, key }) => request(
  replaceParams(GET_GOOGLE_LOCATION, { latlng: `${latitude},${longitude}`, key }),
  { method: 'GET', headers: {} }
);

/**
 *  This function takes generates random string as key
 */
export const generateKey = () => Math.random().toString(36).substring(2, 15);
