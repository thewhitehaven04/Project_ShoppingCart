import ps5 from './resources/images/sony-playstation-ps5-konzola-2.png';
import xsx from './resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';
import ip14 from './resources/images/iphone14pro.png';
import op11 from './resources/images/op11.png';
import zf4 from './resources/images/zfold4.png';
import op11featured from './resources/images/promo/OnePlus-11_review_1-2.webp';
import zf4featured from './resources/images/promo/2_053_ecosystyem_galaxy_zfold4_beige_spen_zflip4_pinkgold_HI_copy.jpg';

import localStorageWrapper from 'service/localStorage';
import { Supply } from 'components/StoreItem/types';

const op11ID = crypto.randomUUID().toString();
const zf4ID = crypto.randomUUID().toString();

/** @type import('components/StoreItemExpanded').ItemExpandedData[] */

const storeItems = [
  {
    id: crypto.randomUUID().toString(),
    name: 'Xbox Series X',
    description:
      'Xbox Series X will be our fastest, most powerful console ever and set a new bar for performance, speed and compatibility, allowing you to bring your gaming legacy, thousands of games from three generations and more forward with you.',
    itemPicture: xsx,
    supply: Supply.MEDIUM,
    price: 499.99,
  },
  {
    id: crypto.randomUUID().toString(),
    name: 'PlayStation 5',
    description:
      'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.',
    itemPicture: ps5,
    supply: Supply.MEDIUM,
    price: 499.99,
  },
  {
    id: crypto.randomUUID().toString(),
    name: 'iPhone 14 Pro',
    description:
      'The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the sixteenth-generation flagship iPhones, succeeding the iPhone 13 Pro and iPhone 13 Pro Max. The devices were unveiled alongside the iPhone 14 and iPhone 14 Plus during the Apple Event at Apple Park in Cupertino, California, on September 7, 2022',
    itemPicture: ip14,
    supply: Supply.HIGH,
    price: 999.99,
  },
  {
    id: op11ID,
    name: 'OnePlus 11',
    itemPicture: op11,
    description:
      "OnePlus 11 combines excellent specs, incredible battery life, and a competent camera system all for just $700. While some enthusiasts might miss out on the fast wireless charging from last year's OnePlus 10 Pro — and OxygenOS 13 remains a shell of its former self — this is a big step in the right direction for the company.",
    supply: Supply.MEDIUM,
    price: 699.99,
  },
  {
    id: zf4ID,
    name: 'Samsung Galaxy Z Fold 4',
    itemPicture: zf4,
    description:
      'The Z Fold 4 is really the first time the biggest Samsung folding smartphone can be recommended to most people, and if you invest in one, it has the power and ability to remain in use for years. Here’s why it’s such a big step forward.',
    supply: Supply.LOW,
    price: 1799.99,
  },
];

const featuredItems = [
  {
    id: op11ID,
    name: 'OnePlus 11',
    promoDescription:
      'The OnePlus 11 5G flagship combines power with effortless elegance. Driven by the most extreme hardware in OnePlus history, dial every possibility up to 11. The OnePlus 11 5G is the Shape of Power. ',
    imagePath: op11,
  },
  {
    id: zf4ID,
    name: 'Samsung Galaxy Z Fold 4',
    promoDescription:
      "From feasibility to refinement, the natural evolution of Samsung's priorities for its flagship foldable smartphone took just a couple of years. The Galaxy Z Fold4 of 2022 focuses on much-needed camera upgrades, and throws in some subtle physical polishing, all the while maintaining the core concept of the productivity-driven phone-turns-tablet form factor.",
    imagePath: zf4,
  },
];

/**
 * @typedef {Object} Identifiable
 * @prop {String} id
 */

/**
 * @template T
 */

/**
 * @param {String} collectionName
 * @param {T} items
 */
function initializeLocalStorageCollection(collectionName, items) {
  const storage = localStorageWrapper(collectionName);

  if (Object.keys(storage.getAll()).length === 0) {
    items.forEach((item) => storage.add(item.id, item));
  }
}

initializeLocalStorageCollection('items', storeItems);
initializeLocalStorageCollection('featuredItems', featuredItems);
