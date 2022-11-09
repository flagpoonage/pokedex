import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex
 * is usually the color most apparent or covering each Pokémon's body. No orange
 * category exists; Pokémon that are primarily orange are listed as red or brown.
 */
export interface PokemonColor extends BaseResource, ResourceWithNames {
  /**
   * A list of the Pokémon species that have this color.
   */
  pokemon_species: NamedAPIResource[];
}
