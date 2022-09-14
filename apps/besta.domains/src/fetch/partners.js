import { sort_objects_by_property } from 'src/functions/objects';
import partnersDict from './partnersJSON';

export const partnersHighlightedFolders = [
  // 'Cerebral Palsy Alliance Research Foundation', // Steptember is manually added as a promo in PartnersSlideshowHero
  'United Way',
  'EARTHDAY',
  'International Medical Corps',
  'Child Mind Institute',
  'Rainforest Trust',
  'Sandy Hook Promise',
  'Bowery Mission',
  'Backpacks For Life',
  'The David Lynch Foundation',
  'Active Plus',
  // 'Food For Life Global',
];

export const getPartners = async function () {
  let partners = [];
  let pi = 0;
  for (let name of Object.keys(partnersDict)) {
    let info = partnersDict[name];
    let part = {
      id: pi,
      folder: name,
      name: info.name || name,
      site: info.site,
      rating: info.rating || info.annual,
      description: info.mission,
      logo: `https://res.cloudinary.com/spiral/image/upload/h_150,q_auto,g_center/v1621981150/partners/${encodeURIComponent(
        name
      )}/logo.png`,
      bg: info.bg || '',
      logoTop: info.logoTop || '',
      logoWidth: info.logoWidth || '',
      logoLeft: info.logoLeft || '',
      logoStyle: info.logoStyle || '',
      logoCSS: info.logoCSS || '',
    };
    if (part.site && part.rating && part.description) {
      partners.push(part);
    }
    pi++;
  }
  sort_objects_by_property(partners, 'rating'); // same as arr.sort(fnctn)
  return partners;
};

export const getPartnersHighlighted = async function () {
  let partners = await getPartners();
  let partnersHighlighted = [];
  for (let part of partners) {
    // add to highlighted
    if (part.bg && partnersHighlightedFolders.includes(part.folder)) {
      part.bg = `https://res.cloudinary.com/spiral/image/upload/h_1070,q_50/v1621981150/partners/${encodeURIComponent(
        part.folder
      )}/bg.jpg`;
      part.sortHighlighted = partnersHighlightedFolders.indexOf(part.folder);
      partnersHighlighted.push(part);
    }
  }
  sort_objects_by_property(partnersHighlighted, 'sortHighlighted', true); // same as arr.sort(fnctn)
  return partnersHighlighted;
};

/*
 * Like both the other 2 functions, but formatted for Contentful
 */
export const makeNewContentfulPartners = function () {
  let parts = [];
  for (let name of Object.keys(partnersDict)) {
    let info = partnersDict[name];
    let part = {
      displayName: info.name || name,
      mission: [info.mission],
      site: info.site,
      sortOrder: info.rating || info.annual,
      ein: undefined,
      carouselItems: undefined,
      logo: undefined,
      urlSlug: undefined,
      logoCardCss: `${(info.logoCSS || '') + (info.logoStyle || '')}`,
      logoCircleCss: `
        width: ${info.logoWidth || '100'}%;
        top: ${info.logoTop || '0'}%;
        left: ${info.logoLeft || '0'}%;
      `,
      featuredInSlideshow: false,
      slideshowBackgroundImage: undefined,
    };
    part.logo = { name: `h_${90 * 2},g_auto/partners/${name}/logo`, ext: 'png' };
    if (info.bg) {
      part.slideshowBackgroundImage = {
        name: `w_${1170 * 2},h_${535 * 2},g_auto,c_fill/partners/${name}/bg`,
        ext: 'jpg',
      };
    }
    if (info.bg && partnersHighlightedFolders.includes(name)) {
      part.featuredInSlideshow = true;
    }
    parts.push(part);
  }
  return parts;
};
