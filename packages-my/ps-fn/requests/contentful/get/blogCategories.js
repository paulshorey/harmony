import getEntries from 'src/fetch/contentful/api/getEntries';
import decodeEntriesToStrings from 'src/fetch/contentful/lib/decodeEntriesToStrings';

export default async ({ categorySlug } = {}) => {
  let categories =
    (await getEntries({
      'content_type': 'blogCategory',
      'fields.slug': categorySlug,
      'include': 10,
    })) || [];
  categories = decodeEntriesToStrings(categories);
  return categories;
};
