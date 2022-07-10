/**
 * Builds address from JSON object.
 * @param address - address JSON containing: city, state, street, zip, suite(optional)
 * @returns string
 */
const buildAddressString = (address) => {
  return `${address.street}${address.suite ? ' ' + address.suite : ''}, ${
    address.city
  }, ${address.state} ${address.zip}`;
};

export default buildAddressString;
