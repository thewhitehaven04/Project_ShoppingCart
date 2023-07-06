/**
 * @param {Number} price
 */
export const formatPrice = (price) => price ? '$' + price.toFixed(2) : '$0.00';
