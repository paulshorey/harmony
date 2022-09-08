import breaks, { breakType } from './breaks';

export type mqType =
  | {
      // simple - as in consumer app
      // EXCEPT - no need for it to be a function, simple string is enough
      [key in breakType]: string;
    }
  | {
      // more complex - from website
      all: string;
      between: (widthMin: breakType, widthMax: breakType) => void;
      betweenHeight: (heightMin: breakType, heightMax: breakType) => void;
      max: (widthMax: breakType, heightMax: breakType) => void;
      maxHeight: (heightMax: breakType, widthMax: breakType) => void;
      min: (widthMin: breakType, heightMin: breakType) => void;
      minHeight: (heightMin: breakType, widthMin: breakType) => void;
    };

/**
 * Example: mq.small
 */
const simpleMaxWidth: Record<string, any> = {};
Object.entries(breaks).forEach(([breakStr, widthNum]) => {
  simpleMaxWidth[breakStr] = widthNum;
});

/**
 * Example: mq.min('small')
 */
const mq = {
  ...simpleMaxWidth,
  all: '@media (min-width: 1px) and (min-height: 1px) and (max-width: 100000px) and (max-height: 100000px)',
  /**
   * Example: mq.min('small')
   * @param width - greater than, NOT EQUAL TO
   * @param height - greater than, NOT EQUAL TO
   */
  min(width: breakType, height: breakType) {
    if (!height) {
      return `@media (min-width: ${breaks[width] + 1}px)`;
    }
    return `@media (min-width: ${breaks[width] + 1}px) and (min-height: ${
      breaks[height] + 1
    }px)`;
  },
  /**
   * Example: mq.max('small')
   * @param width - target screens less than or equal to this
   * @param height - target screens less than or equal to this
   */
  max(width: breakType, height: breakType) {
    if (!height) {
      return `@media (max-width: ${breaks[width]}px)`;
    }
    return `@media (max-width: ${breaks[width]}px) and (max-height: ${breaks[height]}px)`;
  },
  /**
   * Example: mq.between('small', 'medium')
   * @param widthMin - GREATER THAN (NOT EQUAL TO)
   * @param widthMax - less than or equal to this
   */
  between(widthMin: breakType, widthMax: breakType) {
    if (!widthMax) {
      return '@media (min-height: 0px)'; // styles will not be applied (both arguments required)
    }
    return `@media (min-width: ${breaks[widthMin] + 1}px) and (max-width: ${
      breaks[widthMax]
    }px)`;
  },
  /**
   * Example: mq.minHeight('small')
   * @param height - greater than, NOT EQUAL TO
   * @param width - greater than, NOT EQUAL TO
   */
  minHeight(height: breakType, width: breakType) {
    if (!width) {
      return `@media (min-height: ${breaks[height] + 1}px)`;
    }
    return `@media (min-height: ${breaks[height] + 1}px) and (min-width: ${
      breaks[width] + 1
    }px)`;
  },
  /**
   * Example: mq.maxHeight('small')
   * @param height - target screens less than or equal to this
   * @param width - target screens less than or equal to this
   */
  maxHeight(height: breakType, width: breakType) {
    if (!width) {
      return `@media (max-height: ${breaks[height]}px)`;
    }
    return `@media (max-height: ${breaks[height]}px) and (max-width: ${breaks[width]}px)`;
  },
  /**
   * Example: mq.betweenHeight('small', 'medium')
   * @param heightMin - GREATER THAN (NOT EQUAL TO)
   * @param heightMax - less than or equal to this
   */
  betweenHeight(heightMin: breakType, heightMax: breakType) {
    if (!heightMax) {
      return '@media (min-width: 0px)'; // styles will not be applied (both arguments required)
    }
    return `@media (min-height: ${breaks[heightMin] + 1}px) and (max-height: ${
      breaks[heightMax]
    }px)`;
  },
};

export default mq;
