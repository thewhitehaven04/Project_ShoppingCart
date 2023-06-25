import useItemCollection from "./useItemCollection";

/**
 * @param {String} id item id
 */
export default function useItem(id) {
  const storage = useItemCollection(); 

  /** @returns {import("components/StoreItemExpanded").ItemExpandedData} */
  const get = () => storage.get(id);
  
  const update = (/** @type {Object} */ itemData) => storage.update(id, itemData); 

  return { get, update }; 
}