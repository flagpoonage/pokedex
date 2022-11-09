import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Shapes used for sorting Pokémon in a Pokédex.
 */
export interface PokemonShape extends BaseResource, ResourceWithNames {
  /**
   * The "scientific" name of this Pokémon shape listed in different languages.
   */
  awesome_names: AwesomeName[];
  /**
   * A list of the Pokémon species that have this shape.
   */
  pokemon_species: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#awesomename
 *
 * @note No idea why it's called awesome name.
 */
export interface AwesomeName {
  /**
   * The localized "scientific" name for an API resource in a specific language.
   */
  awesome_name: string;
  /**
   * The language this "scientific" name is in.
   */
  language: NamedAPIResource;
}
