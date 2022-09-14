export const insertString = function (origString, indexPosition, stringToAdd) {
  return origString.slice(0, indexPosition) + stringToAdd + origString.slice(indexPosition);
};

export const makeid = function (length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
