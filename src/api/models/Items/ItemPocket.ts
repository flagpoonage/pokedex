import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Pockets within the players bag used for storing items by category.
 */
export interface ItemPocket extends BaseResource, ResourceWithNames {
  /**
   * A list of item categories that are relevant to this item pocket.
   */
  categories: NamedAPIResource[];
}
