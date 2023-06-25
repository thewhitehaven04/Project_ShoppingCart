import { useEffect } from 'react';

/**
 * @param {String} collectionName
 */
export default function useLocalStorage(collectionName) {
  if (!localStorage.getItem(collectionName)) {
    localStorage.setItem(collectionName, JSON.stringify({}));
  }

  /**
   * @param {String} key
   * @param {Object} obj
   */
  const add = (key, obj) => {
    const collection = JSON.parse(localStorage.getItem(collectionName));
    if (collection[key] !== undefined) {
      throw new ReferenceError(
        'Element with given key is already present in the collection',
      );
    }

    collection[key] = obj;
    localStorage.setItem(collectionName, JSON.stringify(collection));
  };

  const remove = (/** @type {string} */ key) => {
    const collection = JSON.parse(localStorage.getItem(collectionName));
    collection[key] = undefined;
    localStorage.setItem(collectionName, JSON.stringify(collection));
  };

  const get = (/** @type {string} */ key) => {
    const collection = JSON.parse(localStorage.getItem(collectionName));
    return collection[key];
  };

  const update = (
    /** @type {string | number} */ key,
    /** @type {any} */ obj,
  ) => {
    const collection = JSON.parse(localStorage.getItem(collectionName));
    collection[key] = obj;

    localStorage.setItem(collectionName, JSON.stringify(collection));
  };

  const getAll = () =>
    Object.values(JSON.parse(localStorage.getItem(collectionName)));

  return { add, remove, get, update, getAll };
}
