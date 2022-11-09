import { PokemonSpecies } from './PokemonSpecies';
import { BaseResource, Description } from '../Utilities';

/**
 * Growth rates are the speed with which Pokémon gain levels through experience.
 * Check out {@link http://bulbapedia.bulbagarden.net/wiki/Experience Bulbapedia}
 * for greater detail.
 */
export interface GrowthRate extends BaseResource {
  /**
   * The formula used to calculate the rate at which the Pokémon species gains level.
   */
  formula: string;
  /**
   * The descriptions of this characteristic listed in different languages.
   */
  descriptions: Description[];
  /**
   * A list of levels and the amount of experienced needed to atain them based
   * on this growth rate.
   */
  levels: GrowthRateExperienceLevel[];
  /**
   * A list of Pokémon species that gain levels at this growth rate.
   */
  pokemon_species: PokemonSpecies[];
}

/**
 * Described in https://pokeapi.co/docs/v2#growthrateexperiencelevel
 */
export interface GrowthRateExperienceLevel {
  /**
   * The level gained.
   */
  level: number;
  /**
   * The amount of experience required to reach the referenced level.
   */
  experience: number;
}
