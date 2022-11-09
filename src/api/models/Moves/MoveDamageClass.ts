import {
  BaseResource,
  NamedAPIResource,
  ResourceWithDescriptions,
  ResourceWithNames,
} from '../Utilities';

/**
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 */
export interface MoveDamageClass
  extends BaseResource,
    ResourceWithNames,
    ResourceWithDescriptions {
  /**
   * A list of moves that fall into this damage class.
   */
  moves: NamedAPIResource[];
}
