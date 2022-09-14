import getAirtableRows from 'src/functions/getAirtableRows';
import getDisclosures from 'src/fetch/contentful/get/disclosures';

const getPageFromAirtable = async function (path) {
  return (
    (
      await getAirtableRows({
        table: 'Pages',
        columns: [
          'path',
          'mixpanel name',
          'browser tab title',
          'social media title',
          'description',
          'social image url',
          'is homepage',
          'hide login',
          'hide nav',
        ],
        formula: `{path} = "${path}"`,
      })
    )?.[0] || {}
  );
};

export default async function ({ path }) {
  // Standardize: always WITHOUT trailing slash format in Airtable,
  // but in case somebody adds trailing slash, also check for that.
  // THEN, IMPORTANT: after getting page from CMS, add the trailing slash when sending to NextJS page,
  // because our site uses trailing slash, and Header and Nav components use it.
  if (path !== '/' && path[path.length - 1] === '/') {
    path = path.slice(0, -1);
  }
  /*
   * Get data for meta tags, social sharing, and disclosures
   */
  let page = await getPageFromAirtable(path);
  if (!page?.path) {
    page = await getPageFromAirtable(path);
  }
  page.path = (page.path || path).replace('//', '/');

  /*
   * Output page meta tags and discosures
   */
  let pageMeta = {
    name: page['mixpanel name'],
    title: page['browser tab title'],
    socialTitle: page['social media title'],
    path: page['path'],
    description: page['description'],
    image: page['social image url'],
    showLogin: !page['hide login'],
    hideNav: !!page['hide nav'],
  };

  /*
   * Get all disclosures
   */
  // From Contentful:
  pageMeta.disclosuresAll = await getDisclosures();
  pageMeta.disclosuresAllNamesById = {};
  pageMeta.disclosuresAllTextsById = {};
  for (let { id, text, name } of pageMeta.disclosuresAll) {
    pageMeta.disclosuresAllTextsById[id] = text;
    pageMeta.disclosuresAllNamesById[id] = name;
  }
  // Each page/route, these will be reset, then updated by src/components/disclosures/atoms/DisclosureNumber:
  pageMeta.disclosuresSuperscriptsOnPageById = {};
  pageMeta.disclosureNumbersUsedInPage = 0;
  return pageMeta;
}
