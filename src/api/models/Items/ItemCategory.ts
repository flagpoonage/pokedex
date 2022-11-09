import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Item categories determine where items will be placed in the players bag.
 */
export interface ItemCategory extends BaseResource, ResourceWithNames {
  /**
   * A list of items that are a part of this category.
   */
  items: NamedAPIResource[];
  /**
   * The pocket items in this category would be put in.
   */
  pocket: NamedAPIResource;
}
