import axios from 'cachios';

/**
 * Axios GET
 */
export function fetchData(URL) {
  return axios
    .get(URL, {
      ttl: 36000000,
    })
    .then(function (response) {
      return {
        success: true,
        endpoint: '',
        data: response.data,
      };
    })
    .catch(function (error) {
      return { success: false };
    });
}
