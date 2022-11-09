import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Move Ailments are status conditions caused by moves used during battle. See
 * {@link https://bulbapedia.bulbagarden.net/wiki/Status_condition Bulbapedia} for greater
 * detail.
 */
export interface MoveAilment extends BaseResource, ResourceWithNames {
  /**
   * A list of moves that cause this ailment.
   */
  moves: NamedAPIResource[];
}
