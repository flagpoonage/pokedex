import {
  BaseResource,
  NamedAPIResource,
  ResourceWithDescriptions,
} from '../Utilities';

/**
 * Very general categories that loosely group move effects.
 */
export interface MoveCategory extends BaseResource, ResourceWithDescriptions {
  /**
   * A list of moves that fall into this category.
   */
  moves: NamedAPIResource[];
}
