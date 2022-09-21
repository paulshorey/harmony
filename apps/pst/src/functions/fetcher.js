import axios from 'cachios';

export const get = async function({ timeout }) {
  console.log(`\n\n\nfetcher_get() ${JSON.stringify([...arguments])}\n\n\n`);
  let time = Date.now();
  let data = await axios.get(...arguments);
  if (data && data.data) {
    return data.data;
  } else {
    return { error: data };
  }
};

export const post = async function() {
  let data = await axios.post(...arguments);
  if (data && data.data) {
    return data.data;
  } else {
    return { error: data };
  }
};
