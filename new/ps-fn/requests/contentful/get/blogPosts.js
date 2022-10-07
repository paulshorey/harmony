import getEntries from 'src/fetch/contentful/api/getEntries';
import decodeEntriesToStrings from 'src/fetch/contentful/lib/decodeEntriesToStrings';

/**
 * Get all partners, sorted
 */
export default async () => {
  let items = await getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });
  if (!items || !items.length) {
    return [];
  }
  items = decodeEntriesToStrings(items);
  return items.map(convertContentfulToWordpress);
};

/*
INPUT FROM CONTENTFUL
{
  id: '6oC0MYfNWEcY94oL8yRR5t',
  title: 'Protecting Our Planet: Rainforest Trust Saves Nearly One Acre Every 10 Seconds, and Now They Need Your Help',
  summary: '<p>Spiral allows you to donate to nonprofits that are working hard to preserve habitats, study and conserve endangered species, and protect our planet’s biodiversity. One of these leading nonprofits is Rainforest Trust.</p>\n',
  featuredImage: 'https://res.cloudinary.com/spiral/images/v1657659785/wordpress-uploads/pexels-denise-2759315_2062accc7/pexels-denise-2759315_2062accc7.webp',
  categoriesText: 'Do Good',
  publishDate: '2022-05-04T17:29:00+00:00',
  body: '<p>The <a href="https://www.iucnredlist.org/">International Union For Conservation of Nature (IUCN) Red List of Threatened Sp...</a></p>\n',
  slug: 'debit-cards-the-easy-way-to-stay-debt-free'
},
*/

/*
OUTPUT TO PAGE (mimic Wordpress):
{
  id: 11,
  slug: 'the_article_title',
  title: { rendered: 'The Article Title' },
  jetpack_featured_media_url: '',
  excerpt: {
    rendered:
      'This is a short description of the content. <b>It sometimes contains HTML.</b> It could just be a cut off beginning of the full text, or a custom written couple lines of text.',
  },
  content: {
    rendered:
      'This is the full text of the content. It contains HTML, so be careful! Display it like this: <pre><code><div className="excerpt" dangerouslySetInnerHTML={{ __html: postContent }} /></code></pre>',
  },
  date_gmt: '2021-04-26T14:45:00',
  featured_media: this.images[0].id,
  author: this.user.id,
  categories: this.categories_ids,
},
*/
