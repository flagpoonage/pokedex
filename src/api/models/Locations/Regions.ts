import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * A region is an organized area of the Pokémon world. Most often, the main difference
 * between regions is the species of Pokémon that can be encountered within them.
 */
export interface Region extends BaseResource, ResourceWithNames {
  /**
   * A list of locations that can be found in this region.
   */
  locations: NamedAPIResource[];
  /**
   * The generation this region was introduced in.
   */
  main_generation: NamedAPIResource;
  /**
   * A list of pokédexes that catalogue Pokémon in this region.
   */
  pokedexes: NamedAPIResource[];
  /**
   * A list of version groups where this region can be visited.
   */
  version_groups: NamedAPIResource[];
}
