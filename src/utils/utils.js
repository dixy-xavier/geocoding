/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
export const request = async (url, method = { method: 'GET' }) => {
  const response = await fetch(url, method);
  return await response.json();
};

/**
 *  This function takes url path and json object as parameter and
 *  returns the path with the replaced path params.
 */
export const replaceParams = (path, params = {}) => Object.keys(params)
  .reduce((prev, next) => prev.replace(new RegExp(`:${next}`, 'g'), params[next]), path);
