import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are
 * specific to {@link https://bulbapedia.bulbagarden.net/wiki/Pal_Park Pal Park}.
 */
export interface PalParkArea extends BaseResource, ResourceWithNames {
  /**
   * A list of Pokémon encountered in thi pal park area along with details.
   */
  pokemon_encounters: PalParkEncounterSpecies[];
}

/**
 * Described in https://pokeapi.co/docs/v2#palparkencounterspecies
 */
export interface PalParkEncounterSpecies {
  /**
   * The base score given to the player when this Pokémon is caught during a pal park run.
   */
  base_score: number;
  /**
   * The base rate for encountering this Pokémon in this pal park area.
   */
  rate: number;
  /**
   * The Pokémon species being encountered.
   */
  pokemon_species: NamedAPIResource;
}
