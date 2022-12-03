import axios from 'cachios';

/**
 * Axios GET
 */
export function fetchData(URL) {
  return axios
    .get(URL)
    .then(function (response) {
      return {
        data: response.data,
        endpoint: '',
        success: true,
      };
    })
    .catch(function (error) {
      return { success: false };
    });
}
