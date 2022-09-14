export const numToSup = function (num) {
  const obj_numToSup = {
    1: '¹',
    2: '²',
    3: '³',
    4: '⁴',
    5: '⁵',
    6: '⁶',
    7: '⁷',
    8: '⁸',
    9: '⁹',
    0: '⁰',
  };
  let sup = '';
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    sup += obj_numToSup[str[i]];
  }
  return sup;
};

export const supToNum = function (sup) {
  const obj_supToNum = {
    '¹': 1,
    '²': 2,
    '³': 3,
    '⁴': 4,
    '⁵': 5,
    '⁶': 6,
    '⁷': 7,
    '⁸': 8,
    '⁹': 9,
    '⁰': 0,
  };
  let num = '';
  let str = sup.toString();
  for (let i = 0; i < str.length; i++) {
    num += obj_supToNum[str[i]];
  }
  return Number(num);
};
