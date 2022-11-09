import {
  BaseResource,
  NamedAPIResource,
  Name,
  Description,
  ResourceWithNames,
} from '../Utilities';

/**
 * Item attributes define particular aspects of items, e.g. "usable in battle"
 * or "consumable".
 */
export interface ItemAttribute extends BaseResource, ResourceWithNames {
  /**
   * A list of items that have this attribute.
   */
  items: NamedAPIResource[];
  /**
   * The description of this item attribute listed in different languages.
   */
  descriptions: Description[];
}
