import { BaseResource, NamedAPIResource } from '../Utilities';

/**
 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can
 * also result in visual differences or even different evolutionary lines. Check out
 * {@link http://bulbapedia.bulbagarden.net/wiki/Gender Bulbapedia} for greater detail.
 */
export interface Gender extends BaseResource {
  /**
   * A list of Pokémon species that can be this gender and how likely it is that they
   * will be.
   */
  pokemon_species_details: PokemonSpeciesGender[];
  /**
   * A list of Pokémon species that required this gender in order for a Pokémon to evolve
   * into them.
   */
  required_for_evolution: NamedAPIResource[];
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonspeciesgender
 */
export interface PokemonSpeciesGender {
  /**
   * The chance of this Pokémon being female, in eighths; or -1 for genderless.
   */
  rate: number;
  /**
   * A Pokémon species that can be the referenced gender.
   */
  pokemon_species: NamedAPIResource;
}
