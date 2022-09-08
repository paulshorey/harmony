/*
 * Same exports as consumer/nonprofit apps src/context/analytics/constants/pages.ts
 */

/*
 * Routes by name
 */
export const names = {
  '404': '/404',
  'categories': '/categories',
  'charities': '/charities',
  'home': '/home',
  'index': '/',
  'login': '/auth/login',
  'logout': '/auth/logout',
};

export type pathType = string;
export type nameType = keyof typeof names;
export type pageType = Record<string, nameType>;
export type pagesType = Record<pathType, pageType>;

/*
 * Routes by path
 */
const pageInfoByPath: Record<string, any> = {};
Object.entries(names).forEach(([name, path]) => {
  pageInfoByPath[path] = {
    name,
  };
});
export const pages: pagesType = pageInfoByPath;
