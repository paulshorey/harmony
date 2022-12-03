/**
 * Helper function to get a specific data tree for a type of resource.
 * @param {String} resourceName - specific type of WP endpoint (e.g. posts, media)
 */
export function wp_getApiDataType(API_DATA, resourceName) {
  const apiType = API_DATA.filter((obj) => {
    if (obj.endpoint === resourceName) {
      return obj;
    }
  });
  return apiType;
}

/**
 * Get Tags/Categories names from objects
 * @param {array} postItems - category/tag objects
 * @returns {array} string - category/tag names
 */
export function wp_categoryNames(API_DATA, postItems, labelType) {
  const labels = [];
  const apiTag = wp_getApiDataType(API_DATA, labelType)[0];

  for (const labelId of postItems) {
    const labelName = apiTag.data.filter((obj) => {
      if (obj.id === labelId) {
        return obj.name;
      }
    });

    labels.push(labelName[0].name);
  }

  return labels;
}
