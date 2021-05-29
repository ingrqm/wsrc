import qs from 'qs';
import Route from 'route-parser';

/**
 * Returns a path with the given parameters.
 * @param {string} pattern - The path pattern.
 * @param {Object} params - The parameters of the path.
 * @param {Object} query.
 */

export const resolveUrl = (pattern, params, query) => {
  const route = new Route(pattern);
  const url = route.reverse(params);
  return query ? `${url}?${qs.stringify(query)}` : url;
};

/**
 * Returns parameters from the given path.
 * @param {string} pattern - The path pattern.
 * @param {string} path - The resolved path.
 */

export const matchUrl = (pattern, path) => {
  const route = new Route(pattern);
  return route.match(path);
};

export const matchParamsUrl = (url) => {
  return qs.parse(getUrlParams(url));
};

export const getUrlString = (url) => {
  return splitUrl(url, '?')[0];
};

export const getUrlParams = (url) => {
  return splitUrl(url, '?')[1];
};

export const splitUrl = (url, pattern) => {
  return url.includes(pattern) ? url.split(pattern) : url;
};

export const extendQueryString = (url, actualQuery, extendedQuery = {}) =>
  url + qs.stringify({ ...actualQuery, ...extendedQuery }, { addQueryPrefix: true, skipNulls: true });
