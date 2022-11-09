import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
  ResourceWithDescriptions,
} from '../Utilities';

/**
 * Item attributes define particular aspects of items, e.g. "usable in battle"
 * or "consumable".
 */
export interface ItemAttribute
  extends BaseResource,
    ResourceWithNames,
    ResourceWithDescriptions {
  /**
   * A list of items that have this attribute.
   */
  items: NamedAPIResource[];
}
