import { createClient } from 'contentful-management';
import generateEntryId from '../lib/generateEntryId';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_KEY,
});

/**
 * Add new entry to Contentful
 * @param {Object} options
 * @param {String} options.contentType
 * @param {Object} options.entry - the Contentful formatted entry, with locales in each text field
 * @param {Object} options.entry.fields - the fields
 * @param {Object} options.entry.fields.displayName - an object dictionary of locales
 * @param {String} options.entry.fields.displayName['en-US'] - finally, this is the text
 * @resolves {String} - returns the new entry id
 */
export default function ({ contentType, entry }) {
  return new Promise((resolve, reject) => {
    let entryId = generateEntryId();
    client
      .createEntryWithId(contentType, entryId, entry)
      .then((response) => {
        if (response.sys.id) {
          console.info('addEntry added', response);
          resolve(response.sys.id);
        } else {
          console.info('addEntry failedToAdd', 'did not return sys.id');
          reject();
        }
      })
      .catch((error) => {
        console.error('addEntry error', error);
        reject();
      });
  });
}
