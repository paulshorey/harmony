/**
 * "that" will be passed to helper function as "this" context
 * this will hold the calculations to help sort the array
 * properties will be calculated/set from array
 */
export type SortThat = {
  min_rating?: number;
  max_rating?: number;
  min_index?: number;
  max_index?: number;
  delta_rating?: number;
  median_rating?: number;
  delta_index?: number;
};

export type SortRatings = Record<string, number>;
