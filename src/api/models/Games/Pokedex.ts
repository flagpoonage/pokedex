import {
  BaseResource,
  NamedAPIResource,
  ResourceWithDescriptions,
  ResourceWithNames,
} from '../Utilities';

/**
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording
 * and retaining information of the various Pokémon in a given region with the exception of
 * the national dex and some smaller dexes related to portions of a region.
 * See {@link http://bulbapedia.bulbagarden.net/wiki/Pokedex Bulbapedia} for greater detail.
 */
export interface Pokedex
  extends BaseResource,
    ResourceWithNames,
    ResourceWithDescriptions {
  /**
   * Whether or not this Pokédex originated in the main series of the video games.
   */
  is_main_series: boolean;
  /**
   * A list of Pokémon catalogued in this Pokédex and their indexes.
   */
  pokemon_entries: PokemonEntry[];
  /**
   * The region this Pokédex catalogues Pokémon for.
   */
  region: NamedAPIResource;
  /**
   * A list of version groups this Pokédex is relevant to.
   */
  version_groups: NamedAPIResource[];
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonentry
 */
export interface PokemonEntry {
  /**
   * The index of this Pokémon species entry within the Pokédex.
   */
  entry_number: number;
  /**
   * The Pokémon species being encountered.
   */
  pokemon_species: NamedAPIResource;
}
