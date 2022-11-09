import {
  BaseResource,
  NamedAPIResource,
  ResourceWithDescriptions,
  ResourceWithNames,
} from '../Utilities';

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or
 * even other moves.
 */
export interface MoveTarget
  extends BaseResource,
    ResourceWithNames,
    ResourceWithDescriptions {
  /**
   * A list of moves that that are directed at this target.
   */
  moves: NamedAPIResource[];
}
