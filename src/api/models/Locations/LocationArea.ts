import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
  VersionEncounterDetail,
} from '../Utilities';

/**
 * Location areas are sections of areas, such as floors in a building or cave. Each area
 * has its own set of possible Pokémon encounters.
 */
export interface LocationArea extends BaseResource, ResourceWithNames {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;
  /**
   * A list of methods in which Pokémon may be encountered in this area and how likely the
   * method will occur depending on the version of the game.
   */
  encounter_method_rates: EncounterMethodRate[];
  /**
   * The region this location area can be found in.
   */
  location: NamedAPIResource;
  /**
   * A list of Pokémon that can be encountered in this area along with version specific
   * details about the encounter.
   */
  pokemon_encounters: PokemonEncounter[];
}

/**
 * Described in https://pokeapi.co/docs/v2#encountermethodrate
 */
export interface EncounterMethodRate {
  /**
   * The method in which Pokémon may be encountered in an area.
   */
  encounter_method: NamedAPIResource;
  /**
   * The chance of the encounter to occur on a version of the game.
   */
  version_details: EncounterVersionDetails[];
}

/**
 * Described in https://pokeapi.co/docs/v2#encounterversiondetails
 */
export interface EncounterVersionDetails {
  /**
   * The chance of an encounter to occur.
   */
  rate: number;
  /**
   * The version of the game in which the encounter can occur with the given chance.
   */
  version: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonencounter
 */
export interface PokemonEncounter {
  /**
   * The Pokémon being encountered.
   */
  pokemon: NamedAPIResource;
  /**
   * A list of versions and encounters with Pokémon that might happen in the referenced
   * location area.
   */
  version_details: VersionEncounterDetail[];
}
