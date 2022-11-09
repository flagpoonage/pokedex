import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Egg Groups are categories which determine which Pokémon are able to
 * interbreed. Pokémon may belong to either one or two Egg Groups.
 * Check out {@link http://bulbapedia.bulbagarden.net/wiki/Egg_Group Bulbapedia}
 * for greater detail.
 */
export interface EggGroup extends BaseResource, ResourceWithNames {
  /**
   * A list of all Pokémon species that are members of this egg group.
   */
  pokemon_species: NamedAPIResource[];
}
