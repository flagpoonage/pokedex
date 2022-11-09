import { BaseResource, Effect, NamedAPIResource } from '../Utilities';

/**
 * The various effects of the move "Fling" when used with different items.
 */
export interface ItemFlingEffect extends BaseResource {
  /**
   * The result of this fling effect listed in different languages.
   */
  effect_entries: Effect[];
  /**
   * A list of items that have this fling effect.
   */
  items: NamedAPIResource[];
}
