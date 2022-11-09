import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * A generation is a grouping of the Pokémon games that separates them based on
 * the Pokémon they include. In each generation, a new set of Pokémon, Moves,
 * Abilities and Types that did not exist in the previous generation are
 * released.
 */
export interface Generation extends BaseResource, ResourceWithNames {
  /**
   * A list of abilities that were introduced in this generation.
   */
  abilities: NamedAPIResource[];
  /**
   * The main region travelled in this generation.
   */
  main_region: NamedAPIResource;
  /**
   * A list of moves that were introduced in this generation.
   */
  moves: NamedAPIResource[];
  /**
   * A list of Pokémon species that were introduced in this generation.
   */
  pokemon_species: NamedAPIResource[];
  /**
   * A list of types that were introduced in this generation.
   */
  types: NamedAPIResource[];
  /**
   * A list of version groups that were introduced in this generation.
   */
  version_groups: NamedAPIResource[];
}
