import useLocalStorage from "./useLocalStorage";

export default function useItemCollection() {
  return useLocalStorage('items');
}